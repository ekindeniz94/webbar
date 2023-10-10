import { Exclude, Expose, Transform, Type } from 'class-transformer';
import { isArray, IsNotEmpty, IsOptional, IsString, IsUUID, ValidateNested } from 'class-validator';
import { StripTags } from '@mo/js-utils';
import { ProjectNamespaceServiceCreateRequestDto } from './project-namespace-service-create-request.dto';
import { ProjectNamespaceServiceKubernetesSettingsPatchRequestDto } from '../project-namespace-service-kubernetes-settings';
import { ProjectNamespaceServiceEnvvarPatchRequestDto } from '../project-namespace-service-envvar';
import { ProjectNamespaceServicePortPatchRequestDto } from '../project-namespace-service-port';
import { ProjectNamespaceServiceCnamePatchRequestDto } from '../project-namespace-service-cname';
import { ServiceTypeEnum } from '../../enums';

export class ProjectNamespaceServicePatchRequestDto extends ProjectNamespaceServiceCreateRequestDto {
  @IsOptional()
  @Exclude()
  type: ServiceTypeEnum;

  @IsNotEmpty()
  @IsString()
  @IsUUID()
  @StripTags()
  @Expose()
  id: string;

  @IsNotEmpty()
  @Type(() => ProjectNamespaceServiceKubernetesSettingsPatchRequestDto)
  @ValidateNested()
  @Expose()
  kubernetesSettings: ProjectNamespaceServiceKubernetesSettingsPatchRequestDto;

  @IsOptional()
  @Transform(({ value }) => (value && isArray(value) ? value : []))
  @Type(() => ProjectNamespaceServiceEnvvarPatchRequestDto)
  @ValidateNested()
  @Expose()
  envVars: ProjectNamespaceServiceEnvvarPatchRequestDto[];

  @IsOptional()
  @Transform(({ value }) => (value && isArray(value) ? value : []))
  @Type(() => ProjectNamespaceServicePortPatchRequestDto)
  @Expose()
  ports: ProjectNamespaceServicePortPatchRequestDto[];

  @IsOptional()
  @Transform(({ value }) => {
    if (value && isArray(value)) {
      return value.filter((item: ProjectNamespaceServiceCnamePatchRequestDto) => !!item.cName);
    }
    return [];
  })
  @Type(() => ProjectNamespaceServiceCnamePatchRequestDto)
  @ValidateNested()
  @Expose()
  cNames: ProjectNamespaceServiceCnamePatchRequestDto[];
}
