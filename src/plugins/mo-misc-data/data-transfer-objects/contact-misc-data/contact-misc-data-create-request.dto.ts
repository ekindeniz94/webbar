import {
  ArrayMaxSize,
  isArray,
  isBoolean,
  IsBoolean,
  IsEmail,
  IsNotEmpty,
  IsOptional,
  isString,
  IsString,
  MaxLength,
  MinLength,
  ValidateNested
} from 'class-validator';
import { Expose, Transform, Type } from 'class-transformer';

export class ContactMiscDataCreateRequestDto {
  @IsNotEmpty()
  @IsString()
  @Transform(({ value }) => value ?? 'en')
  @Expose()
  langISO_639_1: string;

  @IsNotEmpty()
  @IsString()
  @MinLength(2)
  @MaxLength(256)
  @Transform(({ value }) => value?.substring(0, 256))
  @Expose()
  firstName: string;

  @IsNotEmpty()
  @IsString()
  @MinLength(2)
  @MaxLength(256)
  @Transform(({ value }) => value?.substring(0, 256))
  @Expose()
  lastName: string;

  @IsNotEmpty()
  @IsString()
  @IsEmail()
  @MinLength(5)
  @MaxLength(320)
  @Transform(({ value }) => (value && isString(value) ? value.trim() : value)?.substring(0, 320))
  @Expose()
  email: string;

  @IsNotEmpty()
  @IsString()
  @MaxLength(256)
  @Transform(({ value }) => value?.substring(0, 256))
  @Expose()
  interest: string;

  @IsNotEmpty()
  @IsString()
  @MinLength(5)
  @MaxLength(256)
  @Transform(({ value }) => value?.substring(0, 256))
  @Expose()
  subject: string;

  @IsNotEmpty()
  @IsString()
  @MinLength(10)
  @MaxLength(3000)
  @Transform(({ value }) => value?.substring(0, 3000))
  @Expose()
  message: string;

  @Type(() => Boolean)
  @Transform(({ value }) => (isBoolean(value) ? value : false))
  @IsNotEmpty()
  @IsBoolean()
  @Expose()
  subscribeNewsletter: boolean;

  @Type(() => ContactMiscDataCreateRequestDto)
  @IsOptional()
  @Transform(({ value }) => (value && isArray(value) ? value : []))
  @ArrayMaxSize(2)
  @ValidateNested()
  @Expose()
  translations: ContactMiscDataCreateRequestDto[];
}
