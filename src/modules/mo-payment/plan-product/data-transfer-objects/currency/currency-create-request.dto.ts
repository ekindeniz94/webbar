import { Expose } from 'class-transformer';
import { IsEnum, IsInt, IsOptional, IsString, IsUUID, Max, Min } from 'class-validator';
import { ProductRuntimeIntervalEnum } from '../../enums';
import { CountryDto } from '../../../../mo-core';

export class CurrencyCreateRequestDto {
  @IsOptional()
  @IsString()
  @IsUUID()
  @Expose()
  id?: string;

  @Expose()
  country: CountryDto;

  @Expose()
  @IsEnum(ProductRuntimeIntervalEnum)
  interval: ProductRuntimeIntervalEnum;

  @Expose()
  @IsInt()
  pricePerInterval: number;
}
