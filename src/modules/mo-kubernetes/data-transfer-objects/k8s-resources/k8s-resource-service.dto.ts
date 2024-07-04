import { Expose, plainToInstance, Transform, Type } from 'class-transformer';
import { ServiceControllerEnum } from '../../../mo-project-dto/enums/service-controller.enum';
import moment from 'moment';
import {
  ContainerTypeEnum,
  CronjobSettingsDto,
  ProjectNamespaceServiceContainerDto,
  ProjectNamespaceServiceDeploymentStrategyEnum
} from '../../../mo-project-dto';
import { lowerCase } from 'lodash';
import { isArray, isNumber, isNumberString } from 'class-validator';
import { MoUtils } from '@mo/js-utils';

export class K8sResourceServiceDto {
  @Transform(({ value }) => (value && value !== 'undefined' && value !== 'null' ? moment(value).toDate() : value))
  @Transform(({ value, obj }) => value ?? moment(obj?.metadata?.creationTimestamp).toDate(), { toClassOnly: true })
  @Expose()
  createdAt: string | Date;

  @Transform(({ value, obj }) => value ?? obj?.metadata?.uid, { toClassOnly: true })
  @Expose()
  id: string;

  @Transform(({ value, obj }) => value ?? obj?.metadata?.name, { toClassOnly: true })
  @Expose()
  displayName: string;

  @Transform(({ value, obj }) => value ?? obj?.metadata?.name, { toClassOnly: true })
  @Expose()
  controllerName: string;

  @Expose()
  controller: ServiceControllerEnum;

  @Type(() => Number)
  @Transform(
    ({ value, obj }) =>
      isNumber(value) || isNumberString(value)
        ? +value
        : isNumber(obj?.spec?.replicas) || isNumberString(obj?.spec?.replicas)
          ? +obj?.spec?.replicas
          : 0,
    {
      toClassOnly: true
    }
  )
  @Expose()
  replicaCount: number;

  @Transform(
    ({ value, obj }) =>
      value ?? obj?.spec?.strategy?.type
        ? lowerCase(obj?.spec?.strategy?.type)
        : ProjectNamespaceServiceDeploymentStrategyEnum.RECREATE,
    { toClassOnly: true }
  )
  @Expose()
  deploymentStrategy: ProjectNamespaceServiceDeploymentStrategyEnum;

  @Type(() => CronjobSettingsDto)
  @Transform(
    ({ value, obj }) => {
      if (value) {
        return value;
      }
      return {
        backoffLimit: obj?.spec?.jobTemplate?.spec?.backoffLimit,
        activeDeadlineSeconds: obj?.spec?.jobTemplate?.spec?.activeDeadlineSeconds,
        schedule: obj?.spec?.schedule
      };
    },
    { toClassOnly: true }
  )
  @Expose()
  cronJobSettings?: CronjobSettingsDto;

  @Type(() => ProjectNamespaceServiceContainerDto)
  @Transform(
    ({ value, obj }) => {
      if (value) {
        return value;
      }
      value = [];

      const containers = isArray(obj?.spec?.jobTemplate?.spec?.template?.spec?.containers)
        ? obj?.spec?.jobTemplate?.spec?.template?.spec?.containers
        : isArray(obj?.spec?.template?.spec?.containers)
          ? obj?.spec?.template?.spec?.containers
          : [];
      for (const container of containers) {
        value.push(
          plainToInstance(ProjectNamespaceServiceContainerDto, {
            displayName: container.name,
            name: container.name,
            type: ContainerTypeEnum.CONTAINER_IMAGE,
            containerImage: container.image,
            // TODO
            // containerImageRepoSecret:
            containerImageCommand: container?.command ? JSON.stringify(container?.command) : undefined,
            containerImageCommandArgs: container?.args ? JSON.stringify(container?.args) : undefined,
            kubernetesLimits: {
              limitCpuCores: container?.resources?.limits?.cpu
                ? MoUtils.convertKubernetesResourcesCpu(container.resources?.limits?.cpu)
                : 0,
              limitMemoryMB: container?.resources?.limits?.memory
                ? MoUtils.convertKubernetesResourcesCpu(container.resources?.limits?.memory)
                : 0,
              ephemeralStorageMB:
                container?.resources?.limits && container?.resources?.limits['ephemeral-storage']
                  ? MoUtils.convertKubernetesResourcesCpu(container.resources?.limits['ephemeral-storage'])
                  : 0
              // TODO
              // probesOn:
            },
            envVars: [],
            cNames: [],
            ports: obj.ports
          })
        );
      }
      return value;
    },
    { toClassOnly: true }
  )
  @Expose()
  containers: ProjectNamespaceServiceContainerDto[];
}
