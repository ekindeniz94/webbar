export enum ProjectNamespaceServiceEnvVarTypeEnum {
  PLAINTEXT = 'PLAINTEXT',
  KEY_VAULT = 'KEY_VAULT',
  VOLUME_MOUNT = 'VOLUME_MOUNT',
  // VOLUME_MOUNT_SEED = 'VOLUME_MOUNT_SEED',
  // CHANGE_OWNER = 'CHANGE_OWNER',
  HOSTNAME = 'HOSTNAME'
  // EXTERNAL_SECRET_STORE = 'EXTERNAL_SECRET_STORE'
}

export const ProjectNamespaceServiceEnvVarTypeEnum_ALL = [
  ProjectNamespaceServiceEnvVarTypeEnum.PLAINTEXT,
  ProjectNamespaceServiceEnvVarTypeEnum.KEY_VAULT,
  ProjectNamespaceServiceEnvVarTypeEnum.VOLUME_MOUNT,
  // ProjectNamespaceServiceEnvVarTypeEnum.VOLUME_MOUNT_SEED,
  // ProjectNamespaceServiceEnvVarTypeEnum.CHANGE_OWNER,
  ProjectNamespaceServiceEnvVarTypeEnum.HOSTNAME
  // ProjectNamespaceServiceEnvVarTypeEnum.EXTERNAL_SECRET_STORE
];
