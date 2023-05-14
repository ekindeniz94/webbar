import { Expose } from 'class-transformer';
import { IsNumber, IsOptional, IsString } from 'class-validator';

export class ServiceLogStreamRequestDto {
  @Expose()
  @IsString()
  namespace: string;

  @Expose()
  @IsString()
  podId: string;

  @Expose()
  @IsNumber()
  sinceSeconds: number = -1;

  @Expose()
  @IsString()
  @IsOptional()
  postTo?: string;
}
