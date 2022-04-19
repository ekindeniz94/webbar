import { Exclude, Expose, Transform } from 'class-transformer';
import { BaseEntityDto } from '../../../mo-core';
import { isArray, isString } from 'class-validator';
import { UserPublicDto } from '../user/user-public.dto';
import { StripTags } from '../../../../utils';

export class GroupDto extends BaseEntityDto {
  @Exclude()
  createdBy: UserPublicDto;

  @StripTags()
  @Expose()
  name: string;

  @StripTags()
  @Expose()
  description: string;

  @Transform(({ value }) =>
    value && isArray(value) ? value.map((item: any) => (isString(item) ? item : item?.name)) : []
  )
  @StripTags()
  @Expose()
  permissions: string[];

  public hasPermission(permission: string): boolean {
    return !!this.permissions.find((item: string) => item === permission);
  }

  public hasPermissions(permissions: string[]): boolean {
    return !!permissions.find((item: string) => this.hasPermission(item));
  }
}
