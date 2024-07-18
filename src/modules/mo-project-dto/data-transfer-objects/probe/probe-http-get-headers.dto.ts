import { IsString } from 'class-validator';
import { Expose } from 'class-transformer';

export class ProbeHttpGetHeadersDto {
  @IsString()
  @Expose()
  name: string;

  @IsString()
  @Expose()
  value: string;
}
