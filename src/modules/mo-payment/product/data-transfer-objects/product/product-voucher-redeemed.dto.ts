import { Expose, Type } from 'class-transformer';
import { BaseEntityDto } from '../../../../mo-core';
import { UserPublicDto } from '../../../../mo-user';
import { ProductPublicDto } from './product-public.dto';

export class ProductVoucherRedeemedEntity extends BaseEntityDto {
  @Expose()
  id: string;

  @Expose()
  createdAt: string | Date;

  @Type(() => UserPublicDto)
  @Expose()
  user: UserPublicDto;

  @Type(() => ProductPublicDto)
  @Expose()
  productVoucher: ProductPublicDto;
}
