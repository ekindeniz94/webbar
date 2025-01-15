import { Expose } from 'class-transformer';

export class CniPolicyDto {
  @Expose()
  type: string;
}
