import { IsArray, IsIn, IsInt, IsOptional, isString, IsString, Max, Min, ValidateNested } from 'class-validator';
import { Expose, Transform, Type } from 'class-transformer';
import { ProbeHttpGetHeadersDto } from './probe-http-get-headers.dto';

export class ProbeHttpGetDto {
  @IsOptional()
  @IsString()
  @Transform(({ value }) => (isString(value) ? value : '/healthz'))
  @Expose()
  path: string;

  @Min(0)
  @Max(65535)
  @IsInt()
  @Transform(({ value }) => value ?? 80)
  @Expose()
  port: number;

  @IsOptional()
  @IsString()
  @Transform(({ value }) => (isString(value) ? value : undefined))
  @Expose()
  host?: string;

  @IsOptional()
  @IsIn(['HTTP', 'HTTPS'])
  @Transform(({ value }) => value ?? 'HTTP')
  @Expose()
  scheme?: 'HTTP' | 'HTTPS';

  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ProbeHttpGetHeadersDto)
  httpHeaders?: ProbeHttpGetHeadersDto[];
}
