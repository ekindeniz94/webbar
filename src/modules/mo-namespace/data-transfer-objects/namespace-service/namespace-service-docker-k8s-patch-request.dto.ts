import { Expose, Type } from 'class-transformer';
import { IsNumber, IsOptional, IsString, ValidateIf } from 'class-validator';
import { StripTags } from '../../../../utils';
import { KeyVaultSecretDto } from '../key-vault';

export class NamespaceServiceDockerK8sPatchRequestDto {
  @StripTags()
  @Expose()
  namespaceId: string;

  @StripTags()
  @Expose()
  namespaceServiceId: string;

  @IsOptional()
  @ValidateIf((obj: NamespaceServiceDockerK8sPatchRequestDto) => !obj.containerImage)
  @IsString()
  @StripTags()
  @Expose()
  gitRepository: string;

  @IsOptional()
  @ValidateIf((obj: NamespaceServiceDockerK8sPatchRequestDto) => !!obj.gitRepository)
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
  @Expose()
  containerImageRepoSecret: KeyVaultSecretDto;

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
