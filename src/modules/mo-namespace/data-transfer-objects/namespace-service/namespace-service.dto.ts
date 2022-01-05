import { Expose, Transform, Type } from 'class-transformer';
import { isArray, isBoolean, isString } from 'class-validator';
import { BaseEntityDto, DTO_VALIDATION_CONST } from '../../../mo-core';
import { NamespaceServiceEnvVarDto } from './namespace-service-envvar.dto';
import { NamespaceServiceKubernetesSettingsDto } from './namespace-service-kubernetes-settings.dto';
import { ServiceDto, ServiceTypeEnum } from '../../../mo-service-library';
import { TransformFnParams } from 'class-transformer/types/interfaces';
import _ from 'lodash';
import { NamespaceServiceCreateRequestDto } from './namespace-service-create-request.dto';
import { NamespaceStageDto } from '../namespace-stage';
import { NamespaceServicePodDto } from './namespace-service-pod.dto';
import { NamespaceServiceStateEnum } from '../../enums';

export class NamespaceServiceDto extends BaseEntityDto {
  @Expose()
  shortId: string;

  @Transform(({ value, obj }) => (value && isString(value) && value.length > 0 ? value : obj.name))
  @Expose()
  displayName: string;

  @Transform(({ value }) =>
    (value && isString(value) ? value.trim() : value)?.substring(0, DTO_VALIDATION_CONST.NAMESPACE.SERVICE.NAME.MAX)
  )
  @Expose()
  name: string;

  @Transform(({ value }) =>
    (value && isString(value) ? value.trim() : value)?.substring(
      0,
      DTO_VALIDATION_CONST.NAMESPACE.SERVICE.DESCRIPTION.MAX
    )
  )
  @Expose()
  description: string;

  @Transform(({ value }) =>
    (value && isString(value) ? value.trim() : value)?.substring(
      0,
      DTO_VALIDATION_CONST.NAMESPACE.SERVICE.GIT_REPOSITORY.MAX
    )
  )
  @Expose()
  gitRepository: string;

  @Transform((params: TransformFnParams) => NamespaceServiceCreateRequestDto.gitBranchTransform(params))
  @Expose()
  gitBranch: string;

  @Transform(({ value }) =>
    (value && isString(value) ? value.trim() : value)?.substring(
      0,
      DTO_VALIDATION_CONST.NAMESPACE.HTML.DOCUMENT_ROOT.MAX
    )
  )
  @Expose()
  dockerfileName: string;

  @Transform(({ value }) => (value && isArray(value) ? _.uniq(value) : []))
  @Expose()
  cNames: string[];

  @Expose()
  internalPort: number;

  @Transform(({ value }) => (isBoolean(value) ? value : false))
  @Expose()
  expose: boolean;

  @Type(() => NamespaceServiceKubernetesSettingsDto)
  @Expose()
  kubernetesSettings: NamespaceServiceKubernetesSettingsDto;

  @Type(() => NamespaceServiceEnvVarDto)
  @Transform(({ value }) => (value && isArray(value) ? value : []))
  @Expose()
  envVars: NamespaceServiceEnvVarDto[];

  @Type(() => ServiceDto)
  @Expose()
  service: ServiceDto;

  @Type(() => NamespaceStageDto)
  @Expose()
  stage: NamespaceStageDto;

  @Expose()
  state: NamespaceServiceStateEnum;

  @Type(() => NamespaceServicePodDto)
  @Transform(({ value }) => (value && isArray(value) ? value : []))
  @Expose()
  pods: NamespaceServicePodDto[];

  get serviceType(): ServiceTypeEnum {
    return this.service.serviceType;
  }

  get hostname(): string {
    return `${this.name.toLowerCase()}`;
  }

  get fullHostname(): string {
    return `http://${this.name}`;
  }

  get fullHostnameWithPort(): string {
    return `http://${this.name}:${this.internalPort}`;
  }
}
