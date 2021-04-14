import { isArray, IsEmail, IsNotEmpty, isString, IsString, Matches, MinLength } from 'class-validator';
import { Expose, Transform } from 'class-transformer';
import * as _ from 'lodash';

export class AddPermissionResponseDto {
  @Expose()
  id: string;

  @Expose()
  userId: string;

  @Expose()
  groupId: string;

  @Expose()
  permission: string;
}
