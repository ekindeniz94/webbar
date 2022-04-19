import { Expose, Transform, Type } from 'class-transformer';
import { isArray, isBoolean, IsOptional, IsString, isString } from 'class-validator';
import { BaseEntityDto, DTO_VALIDATION_CONST } from '../../../mo-core';
import { NamespaceServiceEnvVarDto } from './namespace-service-envvar.dto';
import { NamespaceServiceKubernetesSettingsDto } from './namespace-service-kubernetes-settings.dto';
import { ServiceDto, ServiceTypeEnum } from '../../../mo-service-library';
import { TransformFnParams } from 'class-transformer/types/interfaces';
import _ from 'lodash';
import { NamespaceServiceCreateRequestDto } from './namespace-service-create-request.dto';
import { NamespaceStageDto } from '../namespace-stage';
import { NamespaceServicePodDto } from './namespace-service-pod.dto';
import { NamespaceServicePortBindingTypeEnum, NamespaceServiceStateEnum } from '../../enums';
import { NamespaceServicePortDto } from './namespace-service-port.dto';
import { NamespaceNotificationDto } from '../../../mo-notification';
import { NamespaceServiceCnameDto } from './namespace-service-cname.dto';

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

  @Expose()
  description: string;

  @Expose()
  gitRepository: string;

  @Transform((params: TransformFnParams) => NamespaceServiceCreateRequestDto.gitBranchTransform(params))
  @Expose()
  gitBranch: string;

  @Expose()
  dockerfileName: string;

  @Transform(({ value }) => value ?? '.')
  @Expose()
  dockerContext: string;

  @Transform(({ value }) => (value && isArray(value) ? value : []))
  @Expose()
  cNames: NamespaceServiceCnameDto[];

  // TODO rm
  @Type(() => Number)
  @Expose()
  internalPort: number;

  // TODO rm
  @Type(() => Boolean)
  @Transform(({ value }) => (isBoolean(value) ? value : false))
  @Expose()
  expose: boolean;

  @Transform(({ value }) => (value && isArray(value) ? value : []))
  @Expose()
  ports: NamespaceServicePortDto[];

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

  @Expose()
  messages: string[];

  @Type(() => NamespaceServicePodDto)
  @Transform(({ value }) => (value && isArray(value) ? value : []))
  @Expose()
  pods: NamespaceServicePodDto[];

  @Type(() => NamespaceNotificationDto)
  @Expose()
  notifications: NamespaceNotificationDto[];

  get tcpPort(): NamespaceServicePortDto | undefined {
    return (
      this.ports.find((item: NamespaceServicePortDto) => item.portType === NamespaceServicePortBindingTypeEnum.TCP) ??
      undefined
    );
  }

  get udpPort(): NamespaceServicePortDto | undefined {
    return (
      this.ports.find((item: NamespaceServicePortDto) => item.portType === NamespaceServicePortBindingTypeEnum.UDP) ??
      undefined
    );
  }

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
