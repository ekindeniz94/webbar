import { Expose } from 'class-transformer';
import { NamespaceServiceTypeEnum } from '../../enums';
import { NamespaceServiceKubernetesSettingsDto } from './namespace-service-kubernetes-settings.dto';
import { BaseEntityDto } from '../../../mo-core';

export class NamespaceServiceDto extends BaseEntityDto {
  @Expose()
  name: string;

  @Expose()
  description: string;

  @Expose()
  gitRepository: string;

  @Expose()
  kubernetesSettings: NamespaceServiceKubernetesSettingsDto;

  @Expose()
  serviceType: NamespaceServiceTypeEnum;
}
