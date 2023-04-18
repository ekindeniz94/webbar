import { Expose } from 'class-transformer';

export class ProductBulletPointDto {
  @Expose()
  iconClass: string;

  @Expose()
  text: string;
}
