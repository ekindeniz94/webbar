import { Expose } from 'class-transformer';
import { IsNotEmpty, IsString } from 'class-validator';

export class UserCompanyDto {
  @Expose()
  name: string;

  @Expose()
  taxNumber: string;
}
