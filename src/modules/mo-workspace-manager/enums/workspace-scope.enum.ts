import { ScopeRoleEnum } from '../../mo-core/enums/scope-role.enum';

export enum WorkspaceScopeEnum {
  WORKSPACE_ADMIN = `workspace:${ScopeRoleEnum.ADMIN}`,
  WORKSPACE_EDITOR = `workspace:${ScopeRoleEnum.EDITOR}`,
  WORKSPACE_VIEW = `workspace:${ScopeRoleEnum.VIEWER}`
}

export const WorkspaceScopeEnum_ALL: WorkspaceScopeEnum[] = [
  WorkspaceScopeEnum.WORKSPACE_ADMIN,
  WorkspaceScopeEnum.WORKSPACE_EDITOR,
  WorkspaceScopeEnum.WORKSPACE_VIEW
];
