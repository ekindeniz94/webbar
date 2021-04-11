import { isArray, IsEmail, IsNotEmpty, IsOptional, isString, IsString, Matches, MinLength } from 'class-validator';
import { Expose, Transform } from 'class-transformer';
import * as _ from 'lodash';

export class UserInviteRequestDto {
  @IsNotEmpty()
  @IsEmail()
  @Transform(({ value }) => (value && isString(value) ? value.trim() : value))
  @Expose()
  email: string;

  @IsNotEmpty()
  @IsString()
  @Transform(({ value }) => (value && isString(value) ? value.trim() : value))
  @Expose()
  groupId: string;

  // // TODO
  // // GROUPS
  // // ROUTE-PERMISSIONS
  //
  // @IsOptional()
  // @IsString({ each: true })
  // @Transform(({ value }) => (value && isArray(value) ? _.uniq(value) : []))
  // @Expose()
  // routePermissions: string[];
  //
  // @IsOptional()
  // @IsString({ each: true })
  // @Transform(({ value }) => (value && isArray(value) ? _.uniq(value) : []))
  // @Expose()
  // permissions: string[];
}
