import { Expose, Transform, Type } from 'class-transformer';
import { NamespaceServiceCreateRequestDto } from './namespace-service-create-request.dto';
import { isArray, IsNotEmpty, IsOptional, IsString, IsUUID, ValidateNested } from 'class-validator';
import { NamespaceServiceKubernetesSettingsPatchRequestDto } from './namespace-service-kubernetes-settings-patch-request.dto';
import { NamespaceServiceEnvVarPatchRequestDto } from './namespace-service-envvar-patch-request.dto';
import { NamespaceServicePortPatchRequestDto } from './namespace-service-port-patch-request.dto';
import { NamespaceServiceCnamePatchRequestDto } from './namespace-service-cname-patch-request.dto';
import { StripTags } from '../../../../utils';

export class NamespaceServicePatchRequestDto extends NamespaceServiceCreateRequestDto {
  @IsNotEmpty()
  @IsString()
  @IsUUID()
  @StripTags()
  @Expose()
  id: string;

  @IsNotEmpty()
  @Type(() => NamespaceServiceKubernetesSettingsPatchRequestDto)
  @ValidateNested()
  @Expose()
  kubernetesSettings: NamespaceServiceKubernetesSettingsPatchRequestDto;

  @IsOptional()
  @Transform(({ value }) => (value && isArray(value) ? value : []))
  @Type(() => NamespaceServiceEnvVarPatchRequestDto)
  @ValidateNested()
  @Expose()
  envVars: NamespaceServiceEnvVarPatchRequestDto[];

  @IsOptional()
  @Transform(({ value }) => (value && isArray(value) ? value : []))
  @Type(() => NamespaceServicePortPatchRequestDto)
  @Expose()
  ports: NamespaceServicePortPatchRequestDto[];

  @IsOptional()
  @Transform(({ value }) => {
    if (value && isArray(value)) {
      return value.filter((item: NamespaceServiceCnamePatchRequestDto) => !!item.cName);
    }
    return [];
  })
  @Type(() => NamespaceServiceCnamePatchRequestDto)
  @ValidateNested()
  @Expose()
  cNames: NamespaceServiceCnamePatchRequestDto[];
}
