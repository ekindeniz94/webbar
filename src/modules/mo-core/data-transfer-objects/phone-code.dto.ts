import { Expose } from 'class-transformer';
import { IsString } from 'class-validator';

export class PhoneCodeDto {
  @IsString()
  @Expose()
  country: string;

  @IsString()
  @Expose()
  code: string;
}
