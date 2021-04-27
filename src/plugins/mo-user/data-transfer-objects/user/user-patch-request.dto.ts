import {
  isBoolean,
  IsBoolean,
  IsEmail, IsNotEmpty,
  IsOptional, isString,
  IsString,
  Matches, MaxLength,
  ValidateIf,
  ValidateNested
} from 'class-validator';
import { Expose, Transform, Type } from 'class-transformer';
import { UserCompanyPatchRequestDto } from './user-company-patch-request.dto';
import { UserAddressPatchRequestDto } from './user-address-patch-request.dto';

export class UserPatchRequestDto {
  @IsOptional()
  @IsString()
  @IsEmail()
  @MaxLength(320)
  @Transform(({ value }) => (value && isString(value) ? value.trim() : value)?.substring(0, 320))
  @Expose()
  email: string;

  @IsOptional()
  @IsString()
  @Matches(/^(?=.*[A-Za-z])(?=.*[0-9])(?=.*?[^\w\s]|.*?_|.*?\.).{6,20}$/, {
    message: 'Password error TODO.'
  })
  @MaxLength(128)
  @Transform(({ value }) => (value && isString(value) ? value.trim() : value)?.substring(0, 128))
  @Expose()
  password: string;

  @IsOptional()
  @IsString()
  @MaxLength(128)
  @Transform(({ value }) => value?.substring(0, 128))
  @Expose()
  phoneNumber: string;

  @IsOptional()
  @IsString()
  @MaxLength(256)
  @Transform(({ value }) => value?.substring(0, 256))
  @Expose()
  firstName: string;

  @IsOptional()
  @IsString()
  @MaxLength(256)
  @Transform(({ value }) => value?.substring(0, 256))
  @Expose()
  lastName: string;

  @IsOptional()
  @Type(() => UserCompanyPatchRequestDto)
  @ValidateNested()
  @Expose()
  company: UserCompanyPatchRequestDto;

  @IsOptional()
  @Type(() => UserAddressPatchRequestDto)
  @ValidateNested()
  @Expose()
  address: UserAddressPatchRequestDto;

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
}
