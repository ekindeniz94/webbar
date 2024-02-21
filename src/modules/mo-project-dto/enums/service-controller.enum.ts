export enum ServiceControllerEnum {
  DEPLOYMENT = 'Deployment',
  REPLICA_SET = 'ReplicaSet',
  STATEFUL_SET = 'StatefulSet',
  DAEMON_SET = 'DaemonSet',
  JOB = 'Job',
  CRON_JOB = 'CronJob'
}

export const ServiceControllerEnum_ALL: ServiceControllerEnum[] = [
  ServiceControllerEnum.DEPLOYMENT,
  ServiceControllerEnum.REPLICA_SET,
  ServiceControllerEnum.STATEFUL_SET,
  ServiceControllerEnum.DAEMON_SET,
  ServiceControllerEnum.JOB,
  ServiceControllerEnum.CRON_JOB
];
