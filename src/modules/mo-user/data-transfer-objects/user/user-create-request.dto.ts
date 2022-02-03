import { Expose, Transform, Type } from 'class-transformer';
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
import { AddressCreateRequestDto, DTO_VALIDATION_CONST } from '../../../mo-core';
import { GroupDto } from '../group';
import {UserCompanyCreateRequestDto} from "./company";

export class UserCreateRequestDto {
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
  @Type(() => UserCompanyCreateRequestDto)
  @ValidateNested()
  @Expose()
  company?: UserCompanyCreateRequestDto;

  @IsOptional()
  @Type(() => AddressCreateRequestDto)
  @ValidateNested()
  @Expose()
  address?: AddressCreateRequestDto;

  @IsOptional()
  @ValidateIf((obj) => obj?.billingAddressEqualsAddress === false)
  @Type(() => AddressCreateRequestDto)
  @ValidateNested()
  @Expose()
  billingAddress?: AddressCreateRequestDto;

  @Type(() => Boolean)
  @Transform(({ value }) => (isBoolean(value) ? value : true))
  @IsNotEmpty()
  @IsBoolean()
  @Expose()
  billingAddressEqualsAddress?: boolean;

  @Type(() => Boolean)
  @Transform(({ value }) => (isBoolean(value) ? value : true))
  @IsNotEmpty()
  @IsBoolean()
  @Expose()
  isActive: boolean;

  // @IsNotEmpty()
  // @IsString()
  // @IsSemanticVersion()
  // @Expose()
  // agreedPrivacyTermsConditionsVersion: string;

  @IsOptional()
  @Type(() => GroupDto)
  @ValidateNested()
  @Expose()
  groups?: GroupDto[];
}
