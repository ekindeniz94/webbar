export enum NamespaceStateEnum {
  ACTIVE = 'active',
  INACTIVE = 'inactive',
  SUSPENDED = 'suspended',
  DISABLED = 'disabled',
  DELETED = 'deleted'
}

export const ALL_NAMESPACE_STATES = [
  NamespaceStateEnum.ACTIVE,
  NamespaceStateEnum.INACTIVE,
  NamespaceStateEnum.SUSPENDED,
  NamespaceStateEnum.DISABLED
];
