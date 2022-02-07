export enum NamespaceStateEnum {
  INACTIVE = 'inactive',
  CREATED = 'CREATED',
  STARTED = 'STARTED',
  ACTIVE = 'active',
  SUSPENDED = 'suspended',
  DISABLED = 'disabled',
  DELETED = 'deleted',
  WARNING = 'WARNING'
}

export const ALL_NAMESPACE_STATES = [
  NamespaceStateEnum.INACTIVE,
  NamespaceStateEnum.CREATED,
  NamespaceStateEnum.STARTED,
  NamespaceStateEnum.ACTIVE,
  NamespaceStateEnum.SUSPENDED,
  NamespaceStateEnum.DISABLED,
  NamespaceStateEnum.DELETED,
  NamespaceStateEnum.WARNING
];
