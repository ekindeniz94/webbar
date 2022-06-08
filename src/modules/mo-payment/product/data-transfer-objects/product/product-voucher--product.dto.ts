import { Expose, Transform } from 'class-transformer';
import { ProductTypeEnum } from '../../enums';

export class ProductVoucherProductDto {
  @Expose()
  id: string;

  @Transform(({ value }) => value ?? ProductTypeEnum.PLAN)
  @Expose()
  productType: ProductTypeEnum;
}
