import { Expose, Transform, Type } from 'class-transformer';
import { IsNumber, IsOptional, IsString, ValidateIf } from 'class-validator';
import { KeyVaultSecretDto } from '../key-vault';
import { StripTags } from '@mo/js-utils';

export class ProjectNamespaceServiceDockerK8sPatchRequestDto {
  @StripTags()
  @Expose()
  namespaceId: string;

  @StripTags()
  @Expose()
  namespaceServiceId: string;

  @IsOptional()
  @ValidateIf((obj: ProjectNamespaceServiceDockerK8sPatchRequestDto) => !obj.containerImage)
  @IsString()
  @StripTags()
  @Expose()
  gitRepository: string;

  @IsOptional()
  @ValidateIf((obj: ProjectNamespaceServiceDockerK8sPatchRequestDto) => !!obj.gitRepository)
  @IsString()
  @StripTags()
  @Expose()
  gitBranch: string;

  @IsOptional()
  @IsString()
  @StripTags()
  @Expose()
  containerImage: string;

  @IsOptional()
  @Type(() => KeyVaultSecretDto)
  @Transform(({ value }) => value ?? null)
  @Expose()
  containerImageRepoSecret: KeyVaultSecretDto;

  @IsOptional()
  @IsString()
  @StripTags()
  @Expose()
  containerImageCommand: string;

  @IsOptional()
  @IsString()
  @StripTags()
  @Expose()
  containerImageCommandArgs: string;

  @IsOptional()
  @IsString()
  @StripTags()
  @Expose()
  dockerfileName: string;

  @IsOptional()
  @IsString()
  @StripTags()
  @Expose()
  dockerContext: string;

  @Type(() => Number)
  @IsOptional()
  @IsNumber()
  @Expose()
  internalPort: number;
}
