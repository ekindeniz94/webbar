import { Expose, Type } from 'class-transformer';
import { ProductPublicDto } from './product-public.dto';
import { ProductDto } from './product.dto';
import { CountryDto } from '@mo/database-dto';

export class ProductHomepageDto {
  @Type(() => ProductDto)
  @Expose()
  products: ProductPublicDto[];

  @Type(() => CountryDto)
  @Expose()
  country: CountryDto;
}
