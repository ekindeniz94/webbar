import { IsEnum, IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { Expose, Transform } from 'class-transformer';
import {
  ProjectNamespaceServiceContainerEnvVarDataDto,
  ProjectNamespaceServiceEnvVarTypeEnum,
  ProjectNamespaceServiceEnvVarVaultTypeEnum
} from '../../../mo-project-dto';

export class AppContainerEnvVarDataCreateRequestDto implements ProjectNamespaceServiceContainerEnvVarDataDto {
  @IsNotEmpty()
  @IsEnum(ProjectNamespaceServiceEnvVarTypeEnum)
  @Expose()
  type: ProjectNamespaceServiceEnvVarTypeEnum;

  @IsOptional()
  @Transform(({ value, obj }: { value: string; obj: ProjectNamespaceServiceContainerEnvVarDataDto }) => {
    switch (obj.type) {
      case ProjectNamespaceServiceEnvVarTypeEnum.PLAINTEXT:
      case ProjectNamespaceServiceEnvVarTypeEnum.HOSTNAME:
        return value;
      case ProjectNamespaceServiceEnvVarTypeEnum.KEY_VAULT:
        if (obj.vaultType === ProjectNamespaceServiceEnvVarVaultTypeEnum.HASHICORP_EXTERNAL_VAULT) {
          return `${obj.vaultStore}/${obj.vaultKey}`;
        }
        if (obj.vaultType === ProjectNamespaceServiceEnvVarVaultTypeEnum.MOGENIUS_VAULT) {
          return value;
        }
        return value;
      case ProjectNamespaceServiceEnvVarTypeEnum.VOLUME_MOUNT:
        const values = [obj.volumeName, obj.volumeSource, obj.volumeDestination].filter((v) => !!v);
        return values.join(':');
      default:
        return value;
    }
  })
  @IsString()
  @Expose()
  value: string;

  @IsOptional()
  @IsEnum(ProjectNamespaceServiceEnvVarVaultTypeEnum)
  @Expose()
  vaultType?: ProjectNamespaceServiceEnvVarVaultTypeEnum;

  @IsOptional()
  @IsString()
  @Expose()
  vaultStore?: string;

  @IsOptional()
  @IsString()
  @Expose()
  vaultKey?: string;

  /****************************************************************
   * VOLUME MOUNT
   ****************************************************************/
  @IsOptional()
  @IsString()
  @Expose()
  volumeName?: string;

  @IsOptional()
  @IsString()
  @Expose()
  volumeSource?: string;

  @IsOptional()
  @IsString()
  @Expose()
  volumeDestination?: string;
}
