export enum NamespaceStateEnum {
  ACTIVE = 'active',
  INACTIVE = 'inactive',
  SUSPENDED = 'suspended',
  DISABLED = 'disbaled'
}

export const ALL_NAMESPACE_STATES = [
  NamespaceStateEnum.ACTIVE,
  NamespaceStateEnum.INACTIVE,
  NamespaceStateEnum.SUSPENDED,
  NamespaceStateEnum.DISABLED
];
