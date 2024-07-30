import { Expose, Transform } from 'class-transformer';
import { IsString, MaxLength, MinLength } from 'class-validator';
import { MoUtils } from '@mogenius/js-utils';

export class SmsMessageDto {
  @IsString()
  @Transform(({ value }) => value ?? MoUtils.nanoid())
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
  @MaxLength(300)
  @Transform(({ value }) => value?.substring(0, 300))
  @Expose()
  text: string;
}
