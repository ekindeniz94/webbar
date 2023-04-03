export enum KubernetesWorkloadEnum {
  DEPLOYMENT = 'deployment',
  NAMESPACE = 'namespace',
  SERVICE = 'service',
  POD = 'pod',
  INGRESS = 'ingress',
  CONFIGMAP = 'configmap',
  SECRET = 'secret',
  NODE = 'node',
  DAEMON_SET = 'daemon_set',
  STATEFUL_SET = 'stateful_set',
  JOB = 'job',
  CRON_JOB = 'cron_job',
  REPLICA_SET = 'replica_set'
}

export const kubernetesWorkloadEnum_ALL = Object.values(KubernetesWorkloadEnum);
