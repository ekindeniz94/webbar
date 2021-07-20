export enum NamespaceServiceEnvVarTypeEnum {
  PLAINTEXT = 'PLAINTEXT',
  KEYVAULT = 'KEYVAULT',
  VOLUME_MOUNT = 'VOLUME_MOUNT',
  VOLUME_MOUNT_SEED = 'VOLUME_MOUNT_SEED'
}

export const ALL_NAMESPACE_SERVICE_ENVVAR_TYPES = [
  NamespaceServiceEnvVarTypeEnum.PLAINTEXT,
  NamespaceServiceEnvVarTypeEnum.KEYVAULT,
  NamespaceServiceEnvVarTypeEnum.VOLUME_MOUNT,
  NamespaceServiceEnvVarTypeEnum.VOLUME_MOUNT_SEED
];
