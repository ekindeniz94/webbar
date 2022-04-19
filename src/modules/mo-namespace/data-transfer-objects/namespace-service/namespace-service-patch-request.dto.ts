import { Expose, Transform, Type } from 'class-transformer';
import { NamespaceServiceCreateRequestDto } from './namespace-service-create-request.dto';
import { ArrayMaxSize, isArray, IsNotEmpty, IsOptional, IsString, IsUUID, ValidateNested } from 'class-validator';
import { NamespaceServiceKubernetesSettingsPatchRequestDto } from './namespace-service-kubernetes-settings-patch-request.dto';
import { NamespaceServiceEnvVarPatchRequestDto } from './namespace-service-envvar-patch-request.dto';
import { NamespaceServicePortPatchRequestDto } from './namespace-service-port-patch-request.dto';
import { DTO_VALIDATION_CONST } from '../../../mo-core';
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
  @Type(() => NamespaceServiceEnvVarPatchRequestDto)
  @Transform(({ value }) => (value && isArray(value) ? value : []))
  @ValidateNested()
  @Expose()
  envVars: NamespaceServiceEnvVarPatchRequestDto[];

  @IsOptional()
  @Type(() => NamespaceServicePortPatchRequestDto)
  @Transform(({ value }) => (value && isArray(value) ? value : []))
  @Expose()
  ports: NamespaceServicePortPatchRequestDto[];

  @IsOptional()
  @ArrayMaxSize(DTO_VALIDATION_CONST.NAMESPACE.CNAME.MAX_ENTRIES)
  @Transform(({ value }) => {
    if (value && isArray(value)) {
      return value.filter((item: NamespaceServiceCnamePatchRequestDto) => !!item.cName);
    }
    return [];
  })
  @ValidateNested()
  @Expose()
  cNames: NamespaceServiceCnamePatchRequestDto[];
}
