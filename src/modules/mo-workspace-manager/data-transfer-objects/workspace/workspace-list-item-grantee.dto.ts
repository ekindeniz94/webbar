import { Expose, Transform, Type } from 'class-transformer';
import {
  IsArray,
  IsEmail,
  IsEnum,
  IsNotEmpty,
  IsOptional,
  isString,
  IsString,
  MaxLength,
  MinLength,
  ValidateNested
} from 'class-validator';
import { MoProjectDtoUtils } from '../../../mo-project-dto';
import moment from 'moment';
import { ClusterPublicDto } from '../../../mo-product-dto';
import { K8sGrantRoleEnum, K8sWorkspaceResourceDto, KUBERNETES_CONST } from '../../../mo-kubernetes';
import { DTO_VALIDATION_CONST } from '../../../mo-core';
import { StripTags } from '@mogenius/js-utils';

export class WorkspaceListItemGranteeDto {
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
