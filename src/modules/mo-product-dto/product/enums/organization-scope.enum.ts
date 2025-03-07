import { ScopeRoleEnum } from '../../../mo-core/enums/scope-role.enum';

export enum OrganizationScopeEnum {
  ORGANIZATION_ADMIN = `organization:${ScopeRoleEnum.ADMIN}`,
  ORGANIZATION_EDITOR = `organization:${ScopeRoleEnum.EDITOR}`,
  ORGANIZATION_VIEWER = `organization:${ScopeRoleEnum.VIEWER}`
}

export const OrganizationScopeEnum_ALL: OrganizationScopeEnum[] = [
  OrganizationScopeEnum.ORGANIZATION_ADMIN,
  OrganizationScopeEnum.ORGANIZATION_EDITOR,
  OrganizationScopeEnum.ORGANIZATION_VIEWER
];
