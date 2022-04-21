import { Expose, Type } from 'class-transformer';
import { CountryDto } from '../../../../mo-core';
import { ProductPublicDto } from './product-public.dto';
import { ProductDto } from './product.dto';

export class ProductHomepageDto {
  @Type(() => ProductDto)
  @Expose()
  products: ProductPublicDto[];

  @Type(() => CountryDto)
  @Expose()
  country: CountryDto;
}
