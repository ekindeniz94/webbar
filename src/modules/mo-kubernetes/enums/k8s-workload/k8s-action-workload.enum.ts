export enum K8sActionWorkloadEnum {
  START = 'start',
  STOP = 'stop',
  RESTART = 'restart',

  // only fpr cronjob
  FORCE_RUN = 'force_run'
}
