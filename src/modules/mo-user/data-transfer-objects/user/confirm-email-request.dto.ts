import { IsString } from 'class-validator';
import { Expose, Transform } from 'class-transformer';
import { MoUtils, StripTags } from '../../../../utils';

export class ConfirmEmailRequestDto {
  @IsString()
  @Transform(({ value }) => value ?? MoUtils.nanoid())
  @StripTags()
  @Expose()
  id: string;

  @IsString()
  @Transform(({ value }) => value ?? Math.random().toString().substr(2, 6))
  @StripTags()
  @Expose()
  pin: string;
}
