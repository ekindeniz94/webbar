import { Expose } from 'class-transformer';
import { IsNumber, IsOptional, IsString } from 'class-validator';

export class ServiceLogStreamRequestDto {
  @Expose()
  @IsString()
  @IsOptional()
  id?: string;

  @Expose()
  @IsString()
  namespace: string;

  @Expose()
  @IsString()
  podId: string;

  @Expose()
  @IsNumber()
  sinceSeconds: number = -1;
}
