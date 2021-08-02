export enum NamespaceServiceEnvVarTypeEnum {
  PLAINTEXT = 'PLAINTEXT',
  KEY_VAULT = 'KEY_VAULT',
  VOLUME_MOUNT = 'VOLUME_MOUNT',
  VOLUME_MOUNT_SEED = 'VOLUME_MOUNT_SEED',
  CHANGE_OWNER = 'CHANGE_OWNER',
  HOSTNAME = 'HOSTNAME'
}

export const ALL_NAMESPACE_SERVICE_ENVVAR_TYPES = [
  NamespaceServiceEnvVarTypeEnum.PLAINTEXT,
  NamespaceServiceEnvVarTypeEnum.KEY_VAULT,
  NamespaceServiceEnvVarTypeEnum.VOLUME_MOUNT,
  NamespaceServiceEnvVarTypeEnum.VOLUME_MOUNT_SEED,
  NamespaceServiceEnvVarTypeEnum.CHANGE_OWNER,
  NamespaceServiceEnvVarTypeEnum.HOSTNAME
];
