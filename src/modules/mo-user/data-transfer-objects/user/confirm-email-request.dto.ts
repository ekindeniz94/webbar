import { IsString } from 'class-validator';
import { Expose, Transform } from 'class-transformer';
import { MoUtils } from '../../../../utils';

export class ConfirmEmailRequestDto {
  @IsString()
  @Transform(({ value }) => value ?? MoUtils.nanoid())
  @Expose()
  id: string;

  @IsString()
  @Transform(({ value }) => value ?? Math.random().toString().substr(2, 6))
  @Expose()
  pin: string;
}
