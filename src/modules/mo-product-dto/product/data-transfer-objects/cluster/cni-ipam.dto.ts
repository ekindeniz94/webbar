import { Expose } from 'class-transformer';

export class CniIpamDto {
  @Expose()
  type: string;
}
