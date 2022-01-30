import { Expose } from 'class-transformer';
import { IsNotEmpty, IsString, IsUUID } from 'class-validator';
import { NamespaceServiceKubernetesSettingsCreateRequestDto } from './namespace-service-kubernetes-settings-create-request.dto';

export class NamespaceServiceKubernetesSettingsPatchRequestDto extends NamespaceServiceKubernetesSettingsCreateRequestDto {
  // @IsNotEmpty()
  // @IsString()
  // @IsUUID()
  // @Expose()
  // id: string;
}
