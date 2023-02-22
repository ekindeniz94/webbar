import { Expose, Type } from 'class-transformer';
import { BaseEntityDto } from '../../../../mo-core';
import { ProductPublicDto } from './product-public.dto';
import { UserPublicDto } from '@mo/user-dto';

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
