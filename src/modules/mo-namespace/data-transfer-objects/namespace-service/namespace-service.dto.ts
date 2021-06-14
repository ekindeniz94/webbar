import { Expose } from 'class-transformer';
import { NamespaceServiceTypeEnum } from '../../enums';
import { NamespaceServiceKubernetesSettingsDto } from './namespace-service-kubernetes-settings.dto';

export class NamespaceServiceDto {
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
