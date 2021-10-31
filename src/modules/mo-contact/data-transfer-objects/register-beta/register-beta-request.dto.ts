import { Expose, Transform, Type } from 'class-transformer';
import { BaseEntityDto, DTO_VALIDATION_CONST, LanguageCodeDto } from '../../../mo-core';
import { RegisterBetaRoleEnum } from '../../enums';
import { IsEmail, IsEnum, IsNotEmpty, IsOptional, isString, IsString, MaxLength, MinLength } from 'class-validator';

export class RegisterBetaRequestDto extends BaseEntityDto {
  @Type(() => LanguageCodeDto)
  @Expose()
  languageCode: LanguageCodeDto;

  @IsNotEmpty()
  @IsString()
  @MinLength(DTO_VALIDATION_CONST.REGISTER_BETA.FULL_NAME.MIN)
  @MaxLength(DTO_VALIDATION_CONST.REGISTER_BETA.FULL_NAME.MAX)
  @Transform(({ value }) =>
    (value && isString(value) ? value.trim() : value)?.substring(0, DTO_VALIDATION_CONST.REGISTER_BETA.FULL_NAME.MAX)
  )
  @Expose()
  fullName: string;

  @IsNotEmpty()
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
}
