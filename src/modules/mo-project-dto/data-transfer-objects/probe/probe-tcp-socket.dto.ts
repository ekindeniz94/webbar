import { IsInt, Max, Min } from 'class-validator';
import { Expose, Transform } from 'class-transformer';

export class ProbeTcpSocketDto {
  @Min(0)
  @Max(65535)
  @IsInt()
  @Transform(({ value }) => value ?? 80)
  @Expose()
  port: number;
}
