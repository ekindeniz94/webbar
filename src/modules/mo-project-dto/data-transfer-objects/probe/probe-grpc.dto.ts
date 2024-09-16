import { IsInt, IsOptional, IsString, Max, Min } from 'class-validator';
import { Expose, Transform } from 'class-transformer';

export class ProbeGrpcDto {
  @Min(0)
  @Max(65535)
  @IsInt()
  @Transform(({ value }) => value ?? 80)
  @Expose()
  port: number;

  @IsOptional()
  @IsString()
  @Expose()
  service?: string;
}
