export enum K8sStreamClusterOperatorLogComponentTypeEnum {
  ComponentAll = 'all',
  ComponentIacManager = 'iac',
  ComponentDb = 'db',
  Store = 'store',
  ComponentDbStats = 'db-stats',
  ComponentCrds = 'crds',
  ComponentKubernetes = 'kubernetes',
  ComponentHelm = 'helm',
  ComponentServices = 'services'
}

export const ALL_K8sStreamClusterOperatorLogComponentTypeEnum: K8sStreamClusterOperatorLogComponentTypeEnum[] = [
  //
  K8sStreamClusterOperatorLogComponentTypeEnum.ComponentAll,
  K8sStreamClusterOperatorLogComponentTypeEnum.ComponentIacManager,
  K8sStreamClusterOperatorLogComponentTypeEnum.ComponentDb,
  K8sStreamClusterOperatorLogComponentTypeEnum.Store,
  K8sStreamClusterOperatorLogComponentTypeEnum.ComponentDbStats,
  K8sStreamClusterOperatorLogComponentTypeEnum.ComponentCrds,
  K8sStreamClusterOperatorLogComponentTypeEnum.ComponentKubernetes,
  K8sStreamClusterOperatorLogComponentTypeEnum.ComponentHelm,
  K8sStreamClusterOperatorLogComponentTypeEnum.ComponentServices
];
