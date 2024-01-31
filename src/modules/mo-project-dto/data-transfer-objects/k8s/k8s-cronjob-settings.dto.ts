import { Expose, Type } from 'class-transformer';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class K8sCronJobSettingsDto {
  @IsNotEmpty()
  @IsNumber()
  @Type(() => Number)
  @Expose()
  backoffLimit: number;

  @IsNotEmpty()
  @IsNumber()
  @Type(() => Number)
  @Expose()
  activeDeadlineSeconds: number;

  @IsNotEmpty()
  @IsString()
  @Type(() => String)
  @Expose()
  schedule: string;
}
