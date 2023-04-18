export enum ClusterProviderEnum {
  BRING_YOUR_OWN = 'BRING_YOUR_OWN',
  EKS = 'EKS', // AWS
  AKS = 'AKS', // Azure
  GKE = 'GKE', // Google
  DOCKER_ENTERPRISE = 'DOCKER_ENTERPRISE', // Docker
  DOKS = 'DOKS', // DigitalOcean
  LINODE = 'LINODE', // Linode Kubernetes
  IBM = 'IBM', // IBM Cloud
  ACK = 'ACK', // Alibaba
  OKE = 'OKE', // Oracle Cloud
  OTC = 'OTC', // Telekom cloud
  OPEN_SHIFT = 'OPEN_SHIFT' // Telekom cloud
}
export const ClusterProviderEnum_ALL: ClusterProviderEnum[] = [
  //
  ClusterProviderEnum.EKS,
  ClusterProviderEnum.AKS,
  ClusterProviderEnum.GKE,
  ClusterProviderEnum.DOCKER_ENTERPRISE,
  ClusterProviderEnum.DOKS,
  ClusterProviderEnum.LINODE,
  ClusterProviderEnum.IBM,
  ClusterProviderEnum.ACK,
  ClusterProviderEnum.OKE,
  ClusterProviderEnum.OTC,
  ClusterProviderEnum.OPEN_SHIFT
];
