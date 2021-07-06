import { Expose, Type } from 'class-transformer';
import { BaseEntityDto } from '../../../mo-core';
import { NamespaceServiceTypeEnum } from '../../enums';
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
}
