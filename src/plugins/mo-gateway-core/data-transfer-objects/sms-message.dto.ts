import { Expose, Transform } from 'class-transformer';
import { IsString, MaxLength, MinLength } from 'class-validator';
import { MoUtil } from '../../../utils';

export class SmsMessageDto {
  @IsString()
  @Transform(({ value }) => value ?? MoUtil.nanoid())
  @Expose()
  id: string;

  @IsString()
  @MinLength(5)
  @MaxLength(15)
  @Transform(({ value }) => value?.substring(0, 15))
  @Expose()
  to: string;

  @IsString()
  @MinLength(5)
  @MaxLength(160)
  @Transform(({ value }) => value?.substring(0, 160))
  @Expose()
  text: string;
}
