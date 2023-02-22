import { IsEmail, IsNotEmpty, isString, IsString, MaxLength } from 'class-validator';
import { Expose, Transform } from 'class-transformer';
import { DTO_VALIDATION_CONST } from '../../../mo-core';
import { StripTags } from '@mo/js-utils';

export class NamespaceInvitationCreateRequestDto {
  // @IsNotEmpty()
  // @IsString()
  // @Expose()
  // namespaceId: string;

  @IsNotEmpty()
  @IsString()
  @StripTags()
  @Expose()
  groupId: string;

  @IsNotEmpty()
  @IsString()
  @IsEmail()
  @MaxLength(DTO_VALIDATION_CONST.EMAIL.MAX)
  @Transform(({ value }) =>
    (value && isString(value) ? value.trim() : value)?.substring(0, DTO_VALIDATION_CONST.EMAIL.MAX)
  )
  @StripTags()
  @Expose()
  email: string;
}
