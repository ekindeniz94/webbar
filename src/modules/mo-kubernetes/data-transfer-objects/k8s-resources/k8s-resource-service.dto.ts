import { Expose, Transform, Type } from 'class-transformer';
import { ServiceControllerEnum } from '../../../mo-project-dto/enums/service-controller.enum';
import moment from 'moment';
import {
  CronjobSettingsDto,
  HpaSettingsDto,
  ProjectNamespaceServiceContainerDto,
  ProjectNamespaceServiceDeploymentStrategyEnum,
  ProjectNamespaceServicePortDto
} from '../../../mo-project-dto';
import { lowerCase } from 'lodash';
import { isArray, isNumber, isNumberString, IsOptional } from 'class-validator';
import { IdDto } from '@mogenius/core-dto';
import { V1CronJob, V1Deployment } from '@kubernetes/client-node';
import { MoUtils } from '@mogenius/js-utils';

type SupportedK8sResource = V1Deployment | V1CronJob;

export class K8sResourceServiceDto {
  @Transform(({ value, obj }: { value: string; obj: SupportedK8sResource }) => value ?? obj?.metadata?.uid, {
    toClassOnly: true
  })
  @Expose()
  id: string;

  @Transform(({ value }) => (value && value !== 'undefined' && value !== 'null' ? moment(value).toDate() : value))
  @Transform(
    ({ value, obj }: { value: string; obj: SupportedK8sResource }) =>
      value ?? moment(obj?.metadata?.creationTimestamp).toDate(),
    { toClassOnly: true }
  )
  @Expose()
  createdAt: string | Date;

  @Type(() => IdDto)
  @Expose()
  projectNamespace: IdDto;

  @Transform(({ value, obj }: { value: string; obj: SupportedK8sResource }) => value ?? obj?.metadata?.name, {
    toClassOnly: true
  })
  @Expose()
  displayName: string;

  @Transform(({ value, obj }: { value: string; obj: SupportedK8sResource }) => value ?? obj?.metadata?.name, {
    toClassOnly: true
  })
  @Expose()
  controllerName: string;

  @Transform(
    ({ value, obj }: { value: ServiceControllerEnum; obj: SupportedK8sResource }) => {
      switch (obj.kind) {
        case 'Deployment':
          return value ?? ServiceControllerEnum.DEPLOYMENT;
        case 'CronJob':
          return value ?? ServiceControllerEnum.CRON_JOB;
        default:
          return value;
      }
    },
    {
      toClassOnly: true
    }
  )
  @Expose()
  controller: ServiceControllerEnum;

  @Type(() => Number)
  @Transform(
    ({ value, obj }: { value: number; obj: SupportedK8sResource }) => {
      console.log('##############################');
      console.log('kind', obj);
      console.log('spec', (obj?.spec as any)?.replicas);
      console.log('value', value);
      switch (obj.kind) {
        case 'Deployment':
          const replicas = (obj?.spec as V1Deployment['spec'])?.replicas;
          console.log(replicas, replicas, isNumber(replicas), isNumberString(replicas));
          value =
            value && (isNumber(value) || isNumberString(value))
              ? +value
              : replicas && (isNumber(replicas) || isNumberString(replicas))
                ? +replicas
                : 0;
          break;
        default:
          value = 0;
      }
      return value;
    },
    {
      toClassOnly: true
    }
  )
  @Expose()
  replicaCount: number;

  @Transform(
    ({ value, obj }: { value: ProjectNamespaceServiceDeploymentStrategyEnum; obj: SupportedK8sResource }) => {
      switch (obj.kind) {
        case 'Deployment':
          const spec = obj?.spec as V1Deployment['spec'];
          return (value ?? spec?.strategy?.type)
            ? lowerCase(spec?.strategy?.type)
            : ProjectNamespaceServiceDeploymentStrategyEnum.RECREATE;
        default:
          return undefined;
      }
    },
    { toClassOnly: true }
  )
  @Expose()
  deploymentStrategy: ProjectNamespaceServiceDeploymentStrategyEnum;

  @Type(() => CronjobSettingsDto)
  @Transform(
    ({ value, obj }: { value: ProjectNamespaceServiceDeploymentStrategyEnum; obj: SupportedK8sResource }) => {
      if (value) {
        return value;
      }

      switch (obj.kind) {
        case 'CronJob':
          const spec = obj?.spec as V1CronJob['spec'];
          return {
            activeDeadlineSeconds: spec?.jobTemplate?.spec?.activeDeadlineSeconds,
            schedule: spec?.schedule
          };
        default:
          return undefined;
      }
    },
    { toClassOnly: true }
  )
  @Expose()
  cronJobSettings?: CronjobSettingsDto;

  @Type(() => ProjectNamespaceServiceContainerDto)
  @Transform(({ value }) => (value && isArray(value) ? value : []))
  @Expose()
  containers: ProjectNamespaceServiceContainerDto[];

  @Type(() => ProjectNamespaceServicePortDto)
  @Transform(({ value }) => (isArray(value) ? value : undefined))
  @Expose()
  ports: ProjectNamespaceServicePortDto[];

  @Type(() => HpaSettingsDto)
  @IsOptional()
  @Expose()
  hpaSettings?: HpaSettingsDto;
}
