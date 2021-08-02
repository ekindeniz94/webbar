import { Expose, Transform, Type } from 'class-transformer';
import { isArray, IsBoolean } from 'class-validator';
import { BaseEntityDto } from '../../../mo-core';
import { NamespaceServiceTypeEnum } from '../../enums';
import { NamespaceServiceEnvVarDto } from './namespace-service-envvar.dto';
import { NamespaceServiceGroupDto } from './namespace-service-group.dto';
import { NamespaceServiceKubernetesSettingsDto } from './namespace-service-kubernetes-settings.dto';

export class NamespaceServiceDto extends BaseEntityDto {
  @Expose()
  name: string;

  @Expose()
  description: string;

  @Expose()
  gitRepository: string;

  @Expose()
  gitBranch: string;

  @Type(() => NamespaceServiceKubernetesSettingsDto)
  @Expose()
  kubernetesSettings: NamespaceServiceKubernetesSettingsDto;

  @Expose()
  serviceType: NamespaceServiceTypeEnum;

  @Expose()
  cNames: string[];

  @Expose()
  internalPort: number;

  @Type(() => NamespaceServiceGroupDto)
  @Expose()
  serviceGroup: NamespaceServiceGroupDto;

  @Type(() => NamespaceServiceEnvVarDto)
  @Transform(({ value }) => (value && isArray(value) ? value : []))
  @Expose()
  envVars: NamespaceServiceEnvVarDto[];

  @IsBoolean()
  @Expose()
  expose: boolean;

  get hostname(): string {
    return `http://${this.name}-${this.id}:${this.internalPort}`;
  }
}
