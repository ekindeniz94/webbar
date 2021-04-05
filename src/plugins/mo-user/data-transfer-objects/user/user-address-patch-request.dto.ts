import { Expose } from 'class-transformer';
import { IsNotEmpty, IsString, ValidateIf } from 'class-validator';
import { ValidateIfObjectNotEmpty } from '../../../../utils';

export class UserAddressPatchRequestDto {
  @ValidateIf((obj: UserAddressPatchRequestDto) => ValidateIfObjectNotEmpty(obj, UserAddressPatchRequestDto))
  @IsNotEmpty()
  @IsString()
  @Expose()
  street: string;

  @ValidateIf((obj: UserAddressPatchRequestDto) => ValidateIfObjectNotEmpty(obj, UserAddressPatchRequestDto))
  @IsNotEmpty()
  @IsString()
  @Expose()
  zip: string;

  @ValidateIf((obj: UserAddressPatchRequestDto) => ValidateIfObjectNotEmpty(obj, UserAddressPatchRequestDto))
  @IsNotEmpty()
  @IsString()
  @Expose()
  city: string;

  @ValidateIf((obj: UserAddressPatchRequestDto) => ValidateIfObjectNotEmpty(obj, UserAddressPatchRequestDto))
  @IsNotEmpty()
  @IsString()
  @Expose()
  country: string;
}
