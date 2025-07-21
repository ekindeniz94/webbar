/*import { Expose, Transform } from 'class-transformer';
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
}*/

import { Expose, Transform } from 'class-transformer';
import { IsEmail, IsEnum, IsNotEmpty, isString, IsString, MaxLength, MinLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger'; // ← Add this import
import { K8sGrantRoleEnum } from '../../../mo-kubernetes';
import { DTO_VALIDATION_CONST } from '../../../mo-core';
import { StripTags, TransformToBoolean } from '@mogenius/js-utils';

export class WorkspaceUserDto {
  @ApiProperty({
    description: 'Indicates if the user is an organization admin',
    example: false,
    required: false,
    type: Boolean
  })
  @TransformToBoolean(false)
  @Expose()
  isOrganizationAdmin?: boolean;

  @ApiProperty({
    description: 'User\'s first name',
    example: 'John',
    minLength: DTO_VALIDATION_CONST.FIRST_NAME.MIN,
    maxLength: DTO_VALIDATION_CONST.FIRST_NAME.MAX,
    type: String
  })
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

  @ApiProperty({
    description: 'User\'s last name',
    example: 'Doe',
    minLength: DTO_VALIDATION_CONST.LAST_NAME.MIN,
    maxLength: DTO_VALIDATION_CONST.LAST_NAME.MAX,
    type: String
  })
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

  @ApiProperty({
    description: 'User\'s email address',
    example: 'john.doe@example.com',
    format: 'email',
    minLength: DTO_VALIDATION_CONST.EMAIL.MIN,
    maxLength: DTO_VALIDATION_CONST.EMAIL.MAX,
    type: String
  })
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

  @ApiProperty({
    description: 'User\'s role in the workspace',
    example: K8sGrantRoleEnum.VIEWER, // or whatever the enum values are
    enum: K8sGrantRoleEnum,
    enumName: 'K8sGrantRoleEnum'
  })
  @IsNotEmpty()
  @IsEnum(K8sGrantRoleEnum)
  @Expose()
  role: K8sGrantRoleEnum;
}
