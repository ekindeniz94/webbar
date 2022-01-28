import {Expose, Transform, Type} from 'class-transformer';
import {IsEnum, IsNotEmpty, IsNumber, IsOptional} from 'class-validator';
import {ProductRuntimeIntervalEnum} from '../../enums';

export class PriceIntervalCreateRequestDto {
  // @IsNotEmpty()
  // @Type(() => ProductDto)
  // @Expose()
  // product: ProductDto;

  @IsNotEmpty()
  @Transform(({ value }) => value ?? ProductRuntimeIntervalEnum.YEAR)
  @IsEnum(ProductRuntimeIntervalEnum)
  @Expose()
  interval: ProductRuntimeIntervalEnum;

  @IsNotEmpty()
  @Transform(({ value }) => value ?? 0)
  @Type(() => Number)
  @IsNumber()
  @Expose()
  price: number;

  @Type(() => Number)
  @Transform(({ value }) => value ?? 0)
  @IsOptional()
  @IsNumber()
  @Expose()
  strikethroughPrice: number;
}
