import { Expose, Transform } from 'class-transformer';
import { IsNotEmpty, IsString, MaxLength, ValidateIf } from 'class-validator';
import { ValidateIfObjectNotEmpty } from '../../../../utils';

export class UserAddressPatchRequestDto {
  @ValidateIf((obj: UserAddressPatchRequestDto) => ValidateIfObjectNotEmpty(obj, UserAddressPatchRequestDto))
  @IsNotEmpty()
  @IsString()
  @MaxLength(256)
  @Transform(({ value }) => value.substring(0, 256))
  @Expose()
  street: string;

  @ValidateIf((obj: UserAddressPatchRequestDto) => ValidateIfObjectNotEmpty(obj, UserAddressPatchRequestDto))
  @IsNotEmpty()
  @IsString()
  @MaxLength(128)
  @Transform(({ value }) => value.substring(0, 128))
  @Expose()
  zip: string;

  @ValidateIf((obj: UserAddressPatchRequestDto) => ValidateIfObjectNotEmpty(obj, UserAddressPatchRequestDto))
  @IsNotEmpty()
  @IsString()
  @MaxLength(128)
  @Transform(({ value }) => value.substring(0, 128))
  @Expose()
  city: string;

  @ValidateIf((obj: UserAddressPatchRequestDto) => ValidateIfObjectNotEmpty(obj, UserAddressPatchRequestDto))
  @IsNotEmpty()
  @IsString()
  @MaxLength(128)
  @Transform(({ value }) => value.substring(0, 128))
  @Expose()
  country: string;
}
