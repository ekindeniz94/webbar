import { Expose, Transform, Type } from 'class-transformer';
import { isArray, IsNotEmpty, IsOptional, IsString, IsUUID, ValidateNested } from 'class-validator';
import { NamespaceServiceKubernetesSettingsCreateRequestDto } from './namespace-service-kubernetes-settings-create-request.dto';
import { NamespaceServiceEnvVarPatchRequestDto } from './namespace-service-envvar-patch-request.dto';

export class NamespaceServiceKubernetesSettingsPatchRequestDto extends NamespaceServiceKubernetesSettingsCreateRequestDto {
  @IsNotEmpty()
  @IsString()
  @IsUUID()
  @Expose()
  id: string;

  @IsNotEmpty()
  @Type(() => NamespaceServiceKubernetesSettingsPatchRequestDto)
  @ValidateNested()
  @Expose()
  kubernetesSettings: NamespaceServiceKubernetesSettingsPatchRequestDto;

  @IsOptional()
  @Type(() => NamespaceServiceEnvVarPatchRequestDto)
  @Transform(({ value }) => (value && isArray(value) ? value : []))
  @ValidateNested()
  @Expose()
  envVars: NamespaceServiceEnvVarPatchRequestDto[];
}
