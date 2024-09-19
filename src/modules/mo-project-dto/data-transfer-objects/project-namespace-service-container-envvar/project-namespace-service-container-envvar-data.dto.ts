import { Expose, Transform } from 'class-transformer';
import { IsEnum, IsNotEmpty, IsOptional, IsString, ValidateIf } from 'class-validator';
import { ProjectNamespaceServiceEnvVarTypeEnum, ProjectNamespaceServiceEnvVarVaultTypeEnum } from '../../enums';
import { isObject, isString } from 'lodash';

export class ProjectNamespaceServiceContainerEnvVarDataDto {
  @IsNotEmpty()
  @IsEnum(ProjectNamespaceServiceEnvVarTypeEnum)
  @Expose()
  type: ProjectNamespaceServiceEnvVarTypeEnum;

  @IsNotEmpty()
  @ValidateIf(
    (obj: ProjectNamespaceServiceContainerEnvVarDataDto) =>
      obj.type === ProjectNamespaceServiceEnvVarTypeEnum.PLAINTEXT ||
      obj.type === ProjectNamespaceServiceEnvVarTypeEnum.HOSTNAME
  )
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

  /****************************************************************
   * KEY VAULT
   * ****************************************************************/
  @IsNotEmpty()
  @ValidateIf(
    (obj: ProjectNamespaceServiceContainerEnvVarDataDto) => obj.type === ProjectNamespaceServiceEnvVarTypeEnum.KEY_VAULT
  )
  @Transform(({ value, obj }: { value: string; obj: ProjectNamespaceServiceContainerEnvVarDataDto }) => {
    if (obj.type === ProjectNamespaceServiceEnvVarTypeEnum.KEY_VAULT) {
      return value;
    }
    return undefined;
  })
  @IsEnum(ProjectNamespaceServiceEnvVarVaultTypeEnum)
  @Expose()
  vaultType?: ProjectNamespaceServiceEnvVarVaultTypeEnum;

  @IsNotEmpty()
  @ValidateIf(
    (obj: ProjectNamespaceServiceContainerEnvVarDataDto) =>
      obj.type === ProjectNamespaceServiceEnvVarTypeEnum.KEY_VAULT &&
      obj.vaultType === ProjectNamespaceServiceEnvVarVaultTypeEnum.HASHICORP_EXTERNAL_VAULT
  )
  @Transform(({ value, obj }: { value: string; obj: ProjectNamespaceServiceContainerEnvVarDataDto }) => {
    if (
      obj.type === ProjectNamespaceServiceEnvVarTypeEnum.KEY_VAULT &&
      obj.vaultType === ProjectNamespaceServiceEnvVarVaultTypeEnum.HASHICORP_EXTERNAL_VAULT
    ) {
      return value;
    }
    return undefined;
  })
  @IsString()
  @Expose()
  vaultStore?: string;

  @IsNotEmpty()
  @ValidateIf(
    (obj: ProjectNamespaceServiceContainerEnvVarDataDto) =>
      obj.type === ProjectNamespaceServiceEnvVarTypeEnum.KEY_VAULT &&
      obj.vaultType === ProjectNamespaceServiceEnvVarVaultTypeEnum.HASHICORP_EXTERNAL_VAULT
  )
  @Transform(({ value, obj }: { value: string; obj: ProjectNamespaceServiceContainerEnvVarDataDto }) => {
    if (
      obj.type === ProjectNamespaceServiceEnvVarTypeEnum.KEY_VAULT &&
      obj.vaultType === ProjectNamespaceServiceEnvVarVaultTypeEnum.HASHICORP_EXTERNAL_VAULT
    ) {
      return value;
    }
    return undefined;
  })
  @IsString()
  @Expose()
  vaultKey?: string;

  /****************************************************************
   * VOLUME MOUNT
   ****************************************************************/
  @IsNotEmpty()
  @ValidateIf(
    (obj: ProjectNamespaceServiceContainerEnvVarDataDto) =>
      obj.type === ProjectNamespaceServiceEnvVarTypeEnum.VOLUME_MOUNT
  )
  @Transform(({ value, obj }: { value: string; obj: ProjectNamespaceServiceContainerEnvVarDataDto }) => {
    if (obj.type === ProjectNamespaceServiceEnvVarTypeEnum.VOLUME_MOUNT) {
      return value;
    }
    return undefined;
  })
  @IsString()
  @Expose()
  volumeName?: string;

  @IsNotEmpty()
  @ValidateIf(
    (obj: ProjectNamespaceServiceContainerEnvVarDataDto) =>
      obj.type === ProjectNamespaceServiceEnvVarTypeEnum.VOLUME_MOUNT
  )
  @Transform(({ value, obj }: { value: string; obj: ProjectNamespaceServiceContainerEnvVarDataDto }) => {
    if (obj.type === ProjectNamespaceServiceEnvVarTypeEnum.VOLUME_MOUNT) {
      return value;
    }
    return undefined;
  })
  @IsString()
  @Expose()
  volumeSource?: string;

  @IsNotEmpty()
  @ValidateIf(
    (obj: ProjectNamespaceServiceContainerEnvVarDataDto) =>
      obj.type === ProjectNamespaceServiceEnvVarTypeEnum.VOLUME_MOUNT
  )
  @Transform(({ value, obj }: { value: string; obj: ProjectNamespaceServiceContainerEnvVarDataDto }) => {
    if (obj.type === ProjectNamespaceServiceEnvVarTypeEnum.VOLUME_MOUNT) {
      return value;
    }
    return undefined;
  })
  @IsString()
  @Expose()
  volumeDestination?: string;
}
