import { Expose } from 'class-transformer';
import { IsEmail, IsEnum, IsNotEmpty, IsString, MaxLength, MinLength } from 'class-validator';
import { DTO_VALIDATION_CONST } from '../../../mo-core';
import { StripTags } from '@mogenius/js-utils';
import { K8sGrantRoleEnum } from '../../../mo-kubernetes';

export class WorkspaceInviteMemberRequestDto {
  @IsNotEmpty()
  @IsString()
  @IsEmail()
  @MinLength(DTO_VALIDATION_CONST.EMAIL.MIN)
  @MaxLength(DTO_VALIDATION_CONST.EMAIL.MAX)
  @StripTags()
  @Expose()
  email: string;

  @IsNotEmpty()
  @IsEnum(K8sGrantRoleEnum)
  @Expose()
  role: K8sGrantRoleEnum;
}
