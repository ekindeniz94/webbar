import { Exclude, Expose } from 'class-transformer';
import { BaseEntityDto } from '../../../mo-core';

export class GroupDto extends BaseEntityDto {
  @Exclude()
  createdBy: string;

  @Expose()
  name: string;

  @Expose()
  description: string;

  @Expose()
  permissions: string[];

  public hasPermission(permission: string): boolean {
    return !!this.permissions.find((item: string) => item === permission);
  }
  
  public hasPermissions(permissions: string[]): boolean {
    return !!permissions.find((item: string) => this.hasPermission(item));
  }
}
