import { Expose, Transform, Type } from 'class-transformer';
import { isBoolean, IsBoolean, IsOptional, IsString } from 'class-validator';
import { TransformToBoolean } from '@mogenius/js-utils';

export abstract class XtermOptionsDto {
  @Type(() => Boolean)
  @Transform(({ value }) => (isBoolean(value) ? value : true))
  @IsOptional()
  @IsBoolean()
  @Expose()
  cursorBlink?: boolean;

  @IsOptional()
  @IsString()
  @Expose()
  cursorStyle?: 'block' | 'underline' | 'bar';

  @IsOptional()
  @IsString()
  @Expose()
  cursorWidth?: number;

  @IsOptional()
  @IsString()
  @Expose()
  cursorInactiveStyle?: 'outline' | 'block' | 'bar' | 'underline' | 'none';

  @IsOptional()
  @IsBoolean()
  @TransformToBoolean(true)
  @Expose()
  convertEol?: boolean;
}
