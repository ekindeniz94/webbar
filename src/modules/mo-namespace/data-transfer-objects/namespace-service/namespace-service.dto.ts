import { Expose } from 'class-transformer';
import { BaseEntityDto } from '../../../mo-core';
import { NamespaceServiceTypeEnum } from '../../enums';
import { NamespaceServiceKubernetesSettingsDto } from './namespace-service-kubernetes-settings.dto';

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

  @Expose()
  cNames: string[];

  @Expose()
  deploymentId: string;
}
