import { Expose, Type } from 'class-transformer';
import { BaseEntityDto, CountryDto } from '../../../../mo-core';
import { ProductDto } from './product.dto';

export class ProductHomepageDto {
  @Type(() => ProductDto)
  @Expose()
  products: ProductDto[];

  @Type(() => CountryDto)
  @Expose()
  country: CountryDto[];
}
