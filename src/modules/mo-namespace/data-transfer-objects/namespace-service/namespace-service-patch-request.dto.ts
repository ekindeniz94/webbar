import { Expose, Transform, Type } from 'class-transformer';
import { NamespaceServiceCreateRequestDto } from './namespace-service-create-request.dto';
import { isArray, IsNotEmpty, IsOptional, IsString, IsUUID, ValidateNested } from 'class-validator';
import { NamespaceServiceKubernetesSettingsPatchRequestDto } from './namespace-service-kubernetes-settings-patch-request.dto';
import { NamespaceServiceEnvVarPatchRequestDto } from './namespace-service-envvar-patch-request.dto';

export class NamespaceServicePatchRequestDto extends NamespaceServiceCreateRequestDto {
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

  // @IsOptional()
  // @Type(() => NamespaceServicePortPatchRequestDto)
  // @Transform(({ value }) => (value && isArray(value) ? value : []))
  // @ValidateNested()
  // @Expose()
  // ports: NamespaceServicePortPatchRequestDto[];
}
