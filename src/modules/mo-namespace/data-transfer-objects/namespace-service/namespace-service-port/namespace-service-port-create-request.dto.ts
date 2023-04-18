import { Expose, Transform, Type } from 'class-transformer';
import { NamespaceServicePortBindingTypeEnum2 } from '../../../enums';
import { isBoolean, IsBoolean, IsEnum, IsNotEmpty, IsNumber, IsOptional, Max, Min } from 'class-validator';

export class NamespaceServicePortCreateRequestDto {
  @IsNotEmpty()
  @IsEnum(NamespaceServicePortBindingTypeEnum2)
  @Expose()
  portType: NamespaceServicePortBindingTypeEnum2;

  @Type(() => Number)
  @IsNumber()
  @IsNotEmpty()
  @Min(0)
  @Max(65535)
  @Expose()
  internalPort: number;

  @Type(() => Number)
  @Transform(({ value, obj }) => (obj?.portType === NamespaceServicePortBindingTypeEnum2.HTTPS ? 80 : value))
  @IsOptional()
  @IsNumber()
  @Min(0)
  @Max(65535)
  @Expose()
  externalPort: number;

  @Type(() => Boolean)
  @Transform(({ value }) => (isBoolean(value) ? value : false))
  @IsBoolean()
  @Expose()
  expose: boolean;

  @Type(() => Boolean)
  @Transform(({ value }) => (isBoolean(value) ? value : false))
  @IsNotEmpty()
  @IsBoolean()
  @Expose()
  spectrumEnableTls: boolean;
}
