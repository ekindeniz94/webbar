import { isArray, IsArray, IsString } from 'class-validator';
import { Expose, Transform } from 'class-transformer';

export class ProbeExecDto {
  @Transform(({ value }) => (isArray(value) && value.length > 0 ? value : undefined))
  @IsArray()
  @IsString({ each: true })
  @Expose()
  command: string[];
}
