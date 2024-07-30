export enum K8sSystemCheckEntryHelmStatusEnum {
  UNKNOWN = 'unknown',
  DEPLOYED = 'deployed',
  UNINSTALLED = 'uninstalled',
  SUPERSEDED = 'superseded',
  FAILED = 'failed',
  UNINSTALLING = 'uninstalling',
  PENDING_INSTALL = 'pending-install',
  PENDING_UPGRADE = 'pending-upgrade',
  PENDING_ROLLBACK = 'pending-rollback'
}
