import { IsString } from 'class-validator';
import { Expose, Transform } from 'class-transformer';

export class SmsConfirmationMessageDto {
  @IsString()
  @Transform(({ value }) => value ?? Math.random().toString().substr(2, 6))
  @Expose()
  pin: string;

  @IsString()
  @Expose()
  userId: string;
}
