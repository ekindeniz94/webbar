export enum K8sStreamScanImageTypeEnum {
  'GRYPE' = 'grype',
  'DIVE' = 'dive',
  'TRIVY' = 'trivy'
}

export const ALL_K8sStreamScanImageTypeEnum: K8sStreamScanImageTypeEnum[] = [
  //
  K8sStreamScanImageTypeEnum.GRYPE,
  K8sStreamScanImageTypeEnum.DIVE,
  K8sStreamScanImageTypeEnum.TRIVY
];
