import {
  isBoolean,
  IsBoolean,
  IsEmail,
  IsOptional,
  IsString,
  Matches,
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
  @Expose()
  email: string;

  @IsOptional()
  @IsString()
  @Matches(/^(?=.*[A-Za-z])(?=.*[0-9])(?=.*?[^\w\s]|.*?_|.*?\.).{6,20}$/, {
    message: 'Password error TODO.'
  })
  @Expose()
  password: string;

  @IsOptional()
  @IsString()
  @Expose()
  phoneNumber: string;

  @IsOptional()
  @IsString()
  @Expose()
  firstName: string;

  @IsOptional()
  @IsString()
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

  @IsBoolean()
  @Transform(({ value }) => (isBoolean(value) ? value : true))
  @Expose()
  billingAddressEqualsAddress: boolean;
}
