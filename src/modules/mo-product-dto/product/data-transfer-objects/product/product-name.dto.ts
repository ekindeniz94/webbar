import { Expose } from 'class-transformer';

export class ProductNameDto {
  @Expose()
  id: string;

  @Expose()
  name: string;
}
