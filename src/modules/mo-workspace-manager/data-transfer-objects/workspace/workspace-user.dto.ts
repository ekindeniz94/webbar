import { Expose, Transform } from 'class-transformer';
import { IsEmail, IsEnum, IsNotEmpty, isString, IsString, MaxLength, MinLength } from 'class-validator';
import { K8sGrantRoleEnum } from '../../../mo-kubernetes';
import { DTO_VALIDATION_CONST } from '../../../mo-core';
import { StripTags, TransformToBoolean } from '@mogenius/js-utils';

export class WorkspaceUserDto {
  @TransformToBoolean(false)
  @Expose()
  isOrganizationAdmin?: boolean;

  @IsNotEmpty()
  @IsString()
  @MinLength(DTO_VALIDATION_CONST.FIRST_NAME.MIN)
  @MaxLength(DTO_VALIDATION_CONST.FIRST_NAME.MAX)
  @Transform(({ value }) =>
    (value && isString(value) ? value.trim() : value)?.substring(0, DTO_VALIDATION_CONST.FIRST_NAME.MAX)
  )
  @StripTags()
  @Expose()
  firstName: string;

  @IsNotEmpty()
  @IsString()
  @MinLength(DTO_VALIDATION_CONST.LAST_NAME.MIN)
  @MaxLength(DTO_VALIDATION_CONST.LAST_NAME.MAX)
  @Transform(({ value }) =>
    (value && isString(value) ? value.trim() : value)?.substring(0, DTO_VALIDATION_CONST.LAST_NAME.MAX)
  )
  @StripTags()
  @Expose()
  lastName: string;

  @IsNotEmpty()
  @IsString()
  @IsEmail()
  @MinLength(DTO_VALIDATION_CONST.EMAIL.MIN)
  @MaxLength(DTO_VALIDATION_CONST.EMAIL.MAX)
  @Transform(({ value }) =>
    (value && isString(value) ? value.trim() : value)?.substring(0, DTO_VALIDATION_CONST.EMAIL.MAX)
  )
  @StripTags()
  @Expose()
  email: string;

  @IsNotEmpty()
  @IsEnum(K8sGrantRoleEnum)
  @Expose()
  role: K8sGrantRoleEnum;
}
