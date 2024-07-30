import { Expose, Transform, Type } from 'class-transformer';
import { IsNotEmpty, isNumber, IsNumber, isNumberString, isString, IsString } from 'class-validator';

export class CronjobSettingsDto {
  @IsNotEmpty()
  @IsNumber()
  @Type(() => Number)
  @Transform(({ value }) => (isNumber(value) || isNumberString(value) ? +value : 10))
  @Expose()
  failedJobsHistoryLimit: number;

  @IsNotEmpty()
  @IsNumber()
  @Type(() => Number)
  @Transform(({ value }) => (isNumber(value) || isNumberString(value) ? +value : 10))
  @Expose()
  successfulJobsHistoryLimit: number;

  @IsNotEmpty()
  @IsNumber()
  @Type(() => Number)
  @Transform(({ value }) => (isNumber(value) || isNumberString(value) ? +value : 5 * 60)) // default 5 minutes
  @Expose()
  activeDeadlineSeconds: number;

  @IsNotEmpty()
  @IsString()
  @Type(() => String)
  @Transform(({ value }) => (isString(value) ? `${value}` : '*/5 * * * *')) // default every 5 minutes
  @Expose()
  schedule: string;
}
