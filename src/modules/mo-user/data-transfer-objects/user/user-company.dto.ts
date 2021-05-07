import { Expose } from 'class-transformer';

export class UserCompanyDto {
  @Expose()
  name: string;

  @Expose()
  taxNumber: string;
}
