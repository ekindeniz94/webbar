import { Expose, Transform, Type } from 'class-transformer';
import { isBoolean, IsBoolean, IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { XtermCmdEnum, XtermRequestTypeEnum } from '../../enums';

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
}
