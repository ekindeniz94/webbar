import { Expose, Transform, Type } from 'class-transformer';
import { DiscountTypeEnum } from '../../enums';
import { isArray } from 'class-validator';
import { ProductVoucherProductDto } from './product-voucher--product.dto';

export class ProductVoucherPublicDto {
  @Expose()
  id: string;

  @Expose()
  name: string;

  @Expose()
  description: string;

  @Expose()
  discountAmountType: DiscountTypeEnum;

  @Expose()
  discountAmount: number;

  @Expose()
  code: string;

  @Type(() => ProductVoucherProductDto)
  @Transform(({ value }) => (value && isArray(value) ? value : []))
  @Expose()
  products: ProductVoucherProductDto[];
}
