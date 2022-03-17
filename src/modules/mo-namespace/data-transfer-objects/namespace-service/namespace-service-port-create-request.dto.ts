import { Expose, Transform, Type } from 'class-transformer';
import { NamespaceServicePortBindingTypeEnum } from '../../enums';
import { isBoolean, IsBoolean, IsEnum, IsNotEmpty, IsNumber, IsOptional } from 'class-validator';

export class NamespaceServicePortCreateRequestDto {
  @IsNotEmpty()
  @IsEnum(NamespaceServicePortBindingTypeEnum)
  @Expose()
  portType: NamespaceServicePortBindingTypeEnum;

  @Type(() => Number)
  @IsNumber()
  @IsNotEmpty()
  @Expose()
  internalPort: number;

  @Type(() => Number)
  @Transform(({ value, obj }) => (obj?.portType === NamespaceServicePortBindingTypeEnum.HTTPS ? 80 : value))
  @IsOptional()
  @IsNumber()
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
