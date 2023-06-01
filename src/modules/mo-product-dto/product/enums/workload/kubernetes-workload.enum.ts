export enum KubernetesWorkloadEnum {
  NAMESPACE = 'namespace',
  POD = 'pod',
  DEPLOYMENT = 'deployment',
  SERVICE = 'service',
  INGRESS = 'ingress',
  CONFIGMAP = 'configmap',
  SECRET = 'secret',
  NODE = 'node',
  DAEMON_SET = 'daemon_set',
  STATEFUL_SET = 'stateful_set',
  JOB = 'job',
  CRON_JOB = 'cron_job',
  REPLICA_SET = 'replica_set',
  PERSISTENT_VOLUME = 'persistent_volume',
  PERSISTENT_VOLUME_CLAIM = 'persistent_volume_claim'

}

export const KubernetesWorkloadEnum_ALL = [
  KubernetesWorkloadEnum.NAMESPACE,
  KubernetesWorkloadEnum.POD,
  KubernetesWorkloadEnum.DEPLOYMENT,
  KubernetesWorkloadEnum.SERVICE,
  KubernetesWorkloadEnum.INGRESS,
  KubernetesWorkloadEnum.CONFIGMAP,
  KubernetesWorkloadEnum.SECRET,
  KubernetesWorkloadEnum.NODE,
  KubernetesWorkloadEnum.DAEMON_SET,
  KubernetesWorkloadEnum.STATEFUL_SET,
  KubernetesWorkloadEnum.REPLICA_SET,
  KubernetesWorkloadEnum.JOB,
  KubernetesWorkloadEnum.CRON_JOB,
  KubernetesWorkloadEnum.PERSISTENT_VOLUME,
  KubernetesWorkloadEnum.PERSISTENT_VOLUME_CLAIM
];
