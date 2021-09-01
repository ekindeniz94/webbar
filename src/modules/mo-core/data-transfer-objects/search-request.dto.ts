import { Expose, Transform } from 'class-transformer';
import { isEnum, IsEnum, IsNumber, IsOptional, isString, IsString } from 'class-validator';
import { OrderEnum } from '../enums';

export class SearchRequestDto {
  @IsOptional()
  @IsString()
  @Transform(({ value }) => (value && isString(value) ? value : ''))
  @Expose()
  searchString: string;

  @IsOptional()
  @IsNumber()
  @Transform(({ value }) => (value ? Number(value) : 1))
  @Expose()
  page: number;

  @IsOptional()
  @IsNumber()
  @Transform(({ value }) => (value ? Number(value) : 20))
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
