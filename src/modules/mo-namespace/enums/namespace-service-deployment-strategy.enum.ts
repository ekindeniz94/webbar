export enum NamespaceServiceDeploymentStrategyEnum {
  ROLLING = 'rolling',
  RECREATE = 'recreate'
}

export const ALL_NAMESPACE_SERVICE_DEPLOYMENT_STRATEGIES = [
  NamespaceServiceDeploymentStrategyEnum.ROLLING,
  NamespaceServiceDeploymentStrategyEnum.RECREATE
];