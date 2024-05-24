export enum ProjectStateEnum {
  INACTIVE = 'inactive',
  CREATED = 'CREATED',
  STARTED = 'STARTED',
  ACTIVE = 'active',
  SUSPENDED = 'suspended',
  DISABLED = 'disabled',
  DELETED = 'deleted',
  WARNING = 'WARNING',
  INFO = 'INFO'
}

export const ProjectStateEnum_ALL: ProjectStateEnum[] = [
  ProjectStateEnum.INACTIVE,
  ProjectStateEnum.CREATED,
  ProjectStateEnum.STARTED,
  ProjectStateEnum.ACTIVE,
  ProjectStateEnum.SUSPENDED,
  ProjectStateEnum.DISABLED,
  ProjectStateEnum.DELETED,
  ProjectStateEnum.WARNING,
  ProjectStateEnum.INFO
];
