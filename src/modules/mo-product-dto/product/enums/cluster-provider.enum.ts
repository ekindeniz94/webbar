export enum ClusterProviderEnum {
  BRING_YOUR_OWN = 'BRING_YOUR_OWN',
  DOCKER_ENTERPRISE = 'DOCKER_ENTERPRISE', // Docker
  AKS = 'AKS', // Azure Kubernetes Service
  GKE = 'GKE', // Google Kubernetes Engine
  EKS = 'EKS', // Amazon Elastic Kubernetes Service
  K3S = 'K3S', // K3S
  K3D = 'K3D', // K3D
  MINIKUBE = 'MINIKUBE', // Minikube
  KIND = 'KIND', // Kind
  KUBERNETES = 'KUBERNETES', // Kubernetes
  // SELF_HOSTED = 'SELF_HOSTED', // Self Hosted
  DOKS = 'DOKS', // Digital Ocean Kubernetes
  LINODE = 'LINODE', // Linode Kubernetes
  IBM = 'IBM', // IBM Kubernetes
  ACK = 'ACK', // Alibaba Cloud Kubernetes
  OKE = 'OKE', // Oracle Cloud Kubernetes
  OTC = 'OTC', // Telekom cloud
  OPEN_SHIFT = 'OPEN_SHIFT', // Telekom cloud,
  GKE_ON_PREM = 'GKE_ON_PREM', // Google Kubernetes Engine On-Prem
  RKE = 'RKE', // Rancher Kubernetes Engine
  KUBEADM = 'KUBEADM', // Kubeadm
  KUBEADM_ON_PREM = 'KUBEADM_ON_PREM', // Kubeadm On-Prem
  KUBEADM_ON_PREM_HETZNER = 'KUBEADM_ON_PREM_HETZNER', // Kubeadm On-Prem Hetzner
  KUBEADM_ON_PREM_DIGITALOCEAN = 'KUBEADM_ON_PREM_DIGITALOCEAN', // Kubeadm On-Prem Digital Ocean
  KUBEADM_ON_PREM_LINODE = 'KUBEADM_ON_PREM_LINODE', // Kubeadm On-Prem Linode
  KUBEADM_ON_PREM_AWS = 'KUBEADM_ON_PREM_AWS', // Kubeadm On-Prem AWS
  KUBEADM_ON_PREM_AZURE = 'KUBEADM_ON_PREM_AZURE', // Kubeadm On-Prem Azure
  KUBEADM_ON_PREM_GCP = 'KUBEADM_ON_PREM_GCP', // Kubeadm On-Prem GCP
  SYS_ELEVEN = 'SYS_ELEVEN', // Managed Kubernetes by SysEleven
  STACKIT = 'SKE', // STACKIT Kubernetes Engine (SKE)
  IONOS = 'IONOS', // IONOS Cloud Managed
  SCALEWAY = 'SCALEWAY' // scaleway
}
export const ClusterProviderEnum_ALL: ClusterProviderEnum[] = [
  //
  ClusterProviderEnum.BRING_YOUR_OWN,
  ClusterProviderEnum.DOCKER_ENTERPRISE,
  ClusterProviderEnum.AKS,
  ClusterProviderEnum.GKE,
  ClusterProviderEnum.EKS,
  ClusterProviderEnum.K3S,
  ClusterProviderEnum.K3D,
  ClusterProviderEnum.MINIKUBE,
  ClusterProviderEnum.KIND,
  ClusterProviderEnum.KUBERNETES,
  // ClusterProviderEnum.SELF_HOSTED,
  ClusterProviderEnum.DOKS,
  ClusterProviderEnum.LINODE,
  ClusterProviderEnum.IBM,
  ClusterProviderEnum.ACK,
  ClusterProviderEnum.OKE,
  ClusterProviderEnum.OTC,
  ClusterProviderEnum.OPEN_SHIFT,
  ClusterProviderEnum.GKE_ON_PREM,
  ClusterProviderEnum.RKE,
  ClusterProviderEnum.KUBEADM,
  ClusterProviderEnum.KUBEADM_ON_PREM,
  ClusterProviderEnum.KUBEADM_ON_PREM_HETZNER,
  ClusterProviderEnum.KUBEADM_ON_PREM_DIGITALOCEAN,
  ClusterProviderEnum.KUBEADM_ON_PREM_LINODE,
  ClusterProviderEnum.KUBEADM_ON_PREM_AWS,
  ClusterProviderEnum.KUBEADM_ON_PREM_AZURE,
  ClusterProviderEnum.KUBEADM_ON_PREM_GCP,
  ClusterProviderEnum.SYS_ELEVEN,
  ClusterProviderEnum.STACKIT,
  ClusterProviderEnum.IONOS,
  ClusterProviderEnum.SCALEWAY
];
