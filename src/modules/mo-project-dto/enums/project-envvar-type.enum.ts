export enum ProjectEnvVarTypeEnum {
  PLAINTEXT = 'PLAINTEXT',
  KEY_VAULT = 'KEY_VAULT',
  VOLUME_MOUNT = 'VOLUME_MOUNT',
  VOLUME_MOUNT_SEED = 'VOLUME_MOUNT_SEED',
  CHANGE_OWNER = 'CHANGE_OWNER',
  HOSTNAME = 'HOSTNAME'
}

export const ProjectEnvVarTypeEnum_ALL = [
  ProjectEnvVarTypeEnum.PLAINTEXT,
  ProjectEnvVarTypeEnum.KEY_VAULT,
  ProjectEnvVarTypeEnum.VOLUME_MOUNT,
  ProjectEnvVarTypeEnum.VOLUME_MOUNT_SEED,
  ProjectEnvVarTypeEnum.CHANGE_OWNER,
  ProjectEnvVarTypeEnum.HOSTNAME
];
