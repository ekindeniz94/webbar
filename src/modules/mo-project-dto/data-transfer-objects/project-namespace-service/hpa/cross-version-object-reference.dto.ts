import { Expose } from 'class-transformer';
import { IsOptional, IsString } from 'class-validator';

export class CrossVersionObjectReference {
  @Expose()
  @IsString()
  kind: string;

  @Expose()
  @IsString()
  name: string;

  @Expose()
  @IsString()
  @IsOptional()
  apiVersion: string;
}
