import {
  isBoolean,
  IsBoolean,
  IsEmail,
  IsNotEmpty,
  IsOptional,
  isString,
  IsString,
  Matches,
  MaxLength,
  MinLength,
  ValidateIf,
  ValidateNested
} from 'class-validator';
import { Expose, Transform, Type } from 'class-transformer';
import { UserCompanyPatchRequestDto } from './user-company-patch-request.dto';
import { UserAddressPatchRequestDto } from './user-address-patch-request.dto';
import { DTO_VALIDATION_CONST, IsInStringList } from '../../../mo-core';
import { GroupDto } from '../group';

export class UserPatchRequestDto {
  @IsOptional()
  @IsString()
  @MaxLength(DTO_VALIDATION_CONST.FIRST_NAME.MAX)
  @Transform(({ value }) =>
    (value && isString(value) ? value.trim() : value)?.substring(0, DTO_VALIDATION_CONST.FIRST_NAME.MAX)
  )
  @Expose()
  firstName?: string;

  @IsOptional()
  @IsString()
  @MaxLength(DTO_VALIDATION_CONST.LAST_NAME.MAX)
  @Transform(({ value }) =>
    (value && isString(value) ? value.trim() : value)?.substring(0, DTO_VALIDATION_CONST.LAST_NAME.MAX)
  )
  @Expose()
  lastName?: string;

  @IsOptional()
  @IsString()
  @IsEmail()
  @MaxLength(DTO_VALIDATION_CONST.EMAIL.MAX)
  @Transform(({ value }) =>
    (value && isString(value) ? value.trim() : value)?.substring(0, DTO_VALIDATION_CONST.EMAIL.MAX)
  )
  @Expose()
  email?: string;

  @IsOptional()
  @IsString()
  @Expose()
  oldPassword?: string;

  @IsOptional()
  @IsString()
  @Matches(DTO_VALIDATION_CONST.PASSWORD.MATCHES, {
    message: 'Password error TODO.'
  })
  @MinLength(DTO_VALIDATION_CONST.PASSWORD.MIN)
  @MaxLength(DTO_VALIDATION_CONST.PASSWORD.MAX)
  @Transform(({ value }) =>
    (value && isString(value) ? value.trim() : value)?.substring(0, DTO_VALIDATION_CONST.PASSWORD.MAX)
  )
  @Expose()
  password?: string;

  @IsOptional()
  @IsString()
  @MaxLength(DTO_VALIDATION_CONST.PHONE_NUMBER_PREFIX.MAX)
  @Transform(({ value }) =>
    (value && isString(value) ? value.trim() : value)?.substring(0, DTO_VALIDATION_CONST.PHONE_NUMBER_PREFIX.MAX)
  )
  @IsInStringList(DTO_VALIDATION_CONST.PHONE_NUMBER_PREFIX.IS_IN_STRING_LIST)
  @Expose()
  phoneNumberPrefix?: string;

  @IsOptional()
  @IsString()
  @MaxLength(DTO_VALIDATION_CONST.PHONE_NUMBER.MAX)
  @Transform(({ value }) =>
    (value && isString(value) ? value.trim() : value)?.substring(0, DTO_VALIDATION_CONST.PHONE_NUMBER.MAX)
  )
  @Expose()
  phoneNumber?: string;

  @IsOptional()
  @Type(() => UserCompanyPatchRequestDto)
  @ValidateNested()
  @Expose()
  company: UserCompanyPatchRequestDto;

  @IsOptional()
  @Type(() => UserAddressPatchRequestDto)
  @ValidateNested()
  @Expose()
  address?: UserAddressPatchRequestDto;

  @IsOptional()
  @ValidateIf((obj) => obj?.billingAddressEqualsAddress === false)
  @Type(() => UserAddressPatchRequestDto)
  @ValidateNested()
  @Expose()
  billingAddress: UserAddressPatchRequestDto;

  @Type(() => Boolean)
  @Transform(({ value }) => (isBoolean(value) ? value : true))
  @IsNotEmpty()
  @IsBoolean()
  @Expose()
  billingAddressEqualsAddress: boolean;

  @Type(() => Boolean)
  @Transform(({ value }) => (isBoolean(value) ? value : false))
  @IsNotEmpty()
  @IsBoolean()
  @Expose()
  agreedTermsConditions: boolean;

  @IsOptional()
  @Type(() => GroupDto)
  @ValidateNested()
  @Expose()
  groups?: GroupDto[];
}
