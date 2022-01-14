import { Expose } from 'class-transformer';
import { IsEnum, IsInt, IsOptional, IsString, IsUUID, Max, Min } from 'class-validator';
import { CurrencyEnum, ProductRuntimeIntervalEnum } from '../../enums';

export class CurrencyCreateRequestDto {
  @IsOptional()
  @IsString()
  @IsUUID()
  @Expose()
  id?: string;

  @Expose()
  @IsEnum(CurrencyEnum)
  type: CurrencyEnum;

  @Expose()
  @IsEnum(ProductRuntimeIntervalEnum)
  interval: ProductRuntimeIntervalEnum;

  @Expose()
  @IsInt()
  pricePerInterval: number;

  @Expose()
  @IsInt()
  @Min(0)
  @Max(100)
  taxPercent: number;
}
