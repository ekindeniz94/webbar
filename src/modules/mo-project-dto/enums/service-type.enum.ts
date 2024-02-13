export enum ServiceTypeEnum {
  // Git
  GIT_REPOSITORY_TEMPLATE = 'GIT_REPOSITORY_TEMPLATE',
  GIT_REPOSITORY = 'GIT_REPOSITORY',
  // Container
  CONTAINER_IMAGE_TEMPLATE = 'CONTAINER_IMAGE_TEMPLATE',
  CONTAINER_IMAGE = 'CONTAINER_IMAGE',
  // K8S
  K8S_DEPLOYMENT = 'K8S_DEPLOYMENT',
  // K8S_DAEMONSET = 'K8S_DAEMONSET',
  // K8S_STATEFULSET = 'K8S_STATEFULSET',
  // K8S_REPLICASET = 'K8S_REPLICASET',
  // K8S_JOB = 'K8S_JOB',
  // CronJob Git
  K8S_CRON_JOB_GIT_REPOSITORY_TEMPLATE = 'K8S_CRON_JOB_GIT_REPOSITORY_TEMPLATE',
  K8S_CRON_JOB_GIT_REPOSITORY = 'K8S_CRON_JOB_GIT_REPOSITORY',
  // CronJob Container
  K8S_CRON_JOB_CONTAINER_IMAGE_TEMPLATE = 'K8S_CRON_JOB_CONTAINER_IMAGE_TEMPLATE',
  K8S_CRON_JOB_CONTAINER_IMAGE = 'K8S_CRON_JOB_CONTAINER_IMAGE'
  // Docker Compose
  // DOCKER_COMPOSE = 'DOCKER_COMPOSE'
}

export const ServiceTypeEnum_ALL: ServiceTypeEnum[] = [
  ServiceTypeEnum.GIT_REPOSITORY_TEMPLATE,
  ServiceTypeEnum.GIT_REPOSITORY,
  ServiceTypeEnum.CONTAINER_IMAGE_TEMPLATE,
  ServiceTypeEnum.CONTAINER_IMAGE,
  ServiceTypeEnum.K8S_DEPLOYMENT,
  // ServiceTypeEnum.K8S_DAEMONSET,
  // ServiceTypeEnum.K8S_STATEFULSET,
  // ServiceTypeEnum.K8S_REPLICASET,
  // ServiceTypeEnum.K8S_JOB,
  ServiceTypeEnum.K8S_CRON_JOB_GIT_REPOSITORY_TEMPLATE,
  ServiceTypeEnum.K8S_CRON_JOB_GIT_REPOSITORY,
  ServiceTypeEnum.K8S_CRON_JOB_CONTAINER_IMAGE_TEMPLATE,
  ServiceTypeEnum.K8S_CRON_JOB_CONTAINER_IMAGE
  // ServiceTypeEnum.DOCKER_COMPOSE
];

export const isServiceContainerImageType = (type: ServiceTypeEnum | undefined): boolean => {
  if (!type) {
    return false;
  }
  return [
    ServiceTypeEnum.CONTAINER_IMAGE,
    ServiceTypeEnum.CONTAINER_IMAGE_TEMPLATE,
    ServiceTypeEnum.K8S_CRON_JOB_CONTAINER_IMAGE,
    ServiceTypeEnum.K8S_CRON_JOB_CONTAINER_IMAGE_TEMPLATE
  ].includes(type);
};

export const isServiceGitRepositoryType = (type: ServiceTypeEnum | undefined): boolean => {
  if (!type) {
    return false;
  }
  return [
    ServiceTypeEnum.GIT_REPOSITORY,
    ServiceTypeEnum.GIT_REPOSITORY_TEMPLATE,
    ServiceTypeEnum.K8S_CRON_JOB_GIT_REPOSITORY,
    ServiceTypeEnum.K8S_CRON_JOB_GIT_REPOSITORY_TEMPLATE
  ].includes(type);
};

export const isServiceCronJobServiceType = (type: ServiceTypeEnum | undefined): boolean => {
  if (!type) {
    return false;
  }
  return [
    ServiceTypeEnum.K8S_CRON_JOB_GIT_REPOSITORY_TEMPLATE,
    ServiceTypeEnum.K8S_CRON_JOB_GIT_REPOSITORY,
    ServiceTypeEnum.K8S_CRON_JOB_CONTAINER_IMAGE_TEMPLATE,
    ServiceTypeEnum.K8S_CRON_JOB_CONTAINER_IMAGE
  ].includes(type);
};
