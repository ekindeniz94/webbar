import { Expose, Transform, Type } from 'class-transformer';
import { isEnum, IsEnum, IsNumber, IsOptional, isString, IsString } from 'class-validator';
import { OrderEnum } from '../enums';

export class SearchRequestDto {
  @IsOptional()
  @IsString()
  @Transform(({ value }) => (value && isString(value) ? decodeURIComponent(value) : ''))
  @Expose()
  searchString: string;

  @Type(() => Number)
  @IsOptional()
  @IsNumber()
  @Transform(({ value }) => (value ? Number(value) : 1))
  @Expose()
  page: number;

  @Type(() => Number)
  @IsOptional()
  @IsNumber()
  @Transform(({ value }) => {
    value = value ? Number(value) : 20;
    if (value > 100) {
      return 100;
    }
    return value;
  })
  @Expose()
  limit: number;

  @IsOptional()
  @IsString()
  @Expose()
  orderBy: string;

  @IsOptional()
  @IsEnum(OrderEnum)
  @Transform(({ value }) => (value && isEnum(value, OrderEnum) ? value : OrderEnum.DESC))
  @Expose()
  order: OrderEnum;
}
