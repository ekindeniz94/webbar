export enum ContainerTypeEnum {
  // Git
  // GIT_REPOSITORY_TEMPLATE = 'GIT_REPOSITORY_TEMPLATE',
  GIT_REPOSITORY = 'GIT_REPOSITORY',
  // Container
  // CONTAINER_IMAGE_TEMPLATE = 'CONTAINER_IMAGE_TEMPLATE',
  CONTAINER_IMAGE = 'CONTAINER_IMAGE'
  // K8S
  // K8S_DEPLOYMENT = 'K8S_DEPLOYMENT',
  // // K8S_DAEMONSET = 'K8S_DAEMONSET',
  // // K8S_STATEFULSET = 'K8S_STATEFULSET',
  // // K8S_REPLICASET = 'K8S_REPLICASET',
  // // K8S_JOB = 'K8S_JOB',
  // // CronJob Git
  // K8S_CRON_JOB_GIT_REPOSITORY_TEMPLATE = 'K8S_CRON_JOB_GIT_REPOSITORY_TEMPLATE',
  // K8S_CRON_JOB_GIT_REPOSITORY = 'K8S_CRON_JOB_GIT_REPOSITORY',
  // // CronJob Container
  // K8S_CRON_JOB_CONTAINER_IMAGE_TEMPLATE = 'K8S_CRON_JOB_CONTAINER_IMAGE_TEMPLATE',
  // K8S_CRON_JOB_CONTAINER_IMAGE = 'K8S_CRON_JOB_CONTAINER_IMAGE',
  // // Docker Compose
  // DOCKER_COMPOSE = 'DOCKER_COMPOSE'
}

export const ContainerTypeEnum_ALL: ContainerTypeEnum[] = [
  // ContainerTypeEnum.GIT_REPOSITORY_TEMPLATE,
  ContainerTypeEnum.GIT_REPOSITORY,
  // ContainerTypeEnum.CONTAINER_IMAGE_TEMPLATE,
  ContainerTypeEnum.CONTAINER_IMAGE
  // ContainerTypeEnum.K8S_DEPLOYMENT,
  // ContainerTypeEnum.K8S_DAEMONSET,
  // ContainerTypeEnum.K8S_STATEFULSET,
  // ContainerTypeEnum.K8S_REPLICASET,
  // ContainerTypeEnum.K8S_JOB,
  // ContainerTypeEnum.K8S_CRON_JOB_GIT_REPOSITORY_TEMPLATE,
  // ContainerTypeEnum.K8S_CRON_JOB_GIT_REPOSITORY,
  // ContainerTypeEnum.K8S_CRON_JOB_CONTAINER_IMAGE_TEMPLATE,
  // ContainerTypeEnum.K8S_CRON_JOB_CONTAINER_IMAGE,
  // ContainerTypeEnum.DOCKER_COMPOSE
];

// export const isServiceContainerImageType = (type: ContainerTypeEnum | undefined): boolean => {
//   if (!type) {
//     return false;
//   }
//   return [
//     ContainerTypeEnum.CONTAINER_IMAGE,
//     ContainerTypeEnum.CONTAINER_IMAGE_TEMPLATE,
//     ContainerTypeEnum.K8S_CRON_JOB_CONTAINER_IMAGE,
//     ContainerTypeEnum.K8S_CRON_JOB_CONTAINER_IMAGE_TEMPLATE
//   ].includes(type);
// };
//
// export const isServiceGitRepositoryType = (type: ContainerTypeEnum | undefined): boolean => {
//   if (!type) {
//     return false;
//   }
//   return [
//     ContainerTypeEnum.GIT_REPOSITORY,
//     ContainerTypeEnum.GIT_REPOSITORY_TEMPLATE,
//     ContainerTypeEnum.K8S_CRON_JOB_GIT_REPOSITORY,
//     ContainerTypeEnum.K8S_CRON_JOB_GIT_REPOSITORY_TEMPLATE
//   ].includes(type);
// };
//
// export const isServiceCronJobServiceType = (type: ContainerTypeEnum | undefined): boolean => {
//   if (!type) {
//     return false;
//   }
//   return [
//     ContainerTypeEnum.K8S_CRON_JOB_GIT_REPOSITORY_TEMPLATE,
//     ContainerTypeEnum.K8S_CRON_JOB_GIT_REPOSITORY,
//     ContainerTypeEnum.K8S_CRON_JOB_CONTAINER_IMAGE_TEMPLATE,
//     ContainerTypeEnum.K8S_CRON_JOB_CONTAINER_IMAGE
//   ].includes(type);
// };
//
// export const isServiceTemplateType = (type: ContainerTypeEnum | undefined): boolean => {
//   if (!type) {
//     return false;
//   }
//   return [
//     ContainerTypeEnum.GIT_REPOSITORY_TEMPLATE,
//     ContainerTypeEnum.CONTAINER_IMAGE_TEMPLATE,
//     ContainerTypeEnum.K8S_CRON_JOB_GIT_REPOSITORY_TEMPLATE,
//     ContainerTypeEnum.K8S_CRON_JOB_CONTAINER_IMAGE_TEMPLATE
//   ].includes(type);
// };
