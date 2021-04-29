import { Expose } from 'class-transformer';
import { IsString } from 'class-validator';

export class SmsMessageDto {
  @IsString()
  @Expose()
  id: string;

  @IsString()
  @Expose()
  to: string;

  @IsString()
  @Expose()
  text: string;
}
