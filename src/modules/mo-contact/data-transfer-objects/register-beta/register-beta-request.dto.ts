import { Expose, Transform, Type } from 'class-transformer';
import { IsBoolean, IsEmail, IsEnum, IsOptional, isString, IsString, MaxLength, MinLength } from 'class-validator';
import { BaseEntityDto, DTO_VALIDATION_CONST, LanguageCodeDto } from '../../../mo-core';
import { RegisterBetaRoleEnum } from '../../enums';

export class RegisterBetaRequestDto extends BaseEntityDto {
  @Type(() => LanguageCodeDto)
  @Expose()
  languageCode: LanguageCodeDto;

  @IsOptional()
  @IsString()
  @MinLength(DTO_VALIDATION_CONST.REGISTER_BETA.FULL_NAME.MIN)
  @MaxLength(DTO_VALIDATION_CONST.REGISTER_BETA.FULL_NAME.MAX)
  @Transform(({ value }) =>
    (value && isString(value) ? value.trim() : value)?.substring(0, DTO_VALIDATION_CONST.REGISTER_BETA.FULL_NAME.MAX)
  )
  @Expose()
  fullName: string;

  @IsOptional()
  @IsString()
  @IsEmail()
  @MinLength(DTO_VALIDATION_CONST.EMAIL.MIN)
  @MaxLength(DTO_VALIDATION_CONST.EMAIL.MAX)
  @Transform(({ value }) =>
    (value && isString(value) ? value.trim() : value)?.substring(0, DTO_VALIDATION_CONST.EMAIL.MAX)
  )
  @Expose()
  email: string;

  @IsOptional()
  @IsEnum(RegisterBetaRoleEnum)
  @Transform(({ value }) => value ?? RegisterBetaRoleEnum.OTHER)
  @Expose()
  role: RegisterBetaRoleEnum;

  @Type(() => Boolean)
  @IsOptional()
  @IsBoolean()
  @Expose()
  agreedTermsConditions: boolean;
}
