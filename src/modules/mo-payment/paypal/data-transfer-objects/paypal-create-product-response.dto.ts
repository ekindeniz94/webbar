import { PaypalLinkDto } from './resource';
import { Expose, Type } from 'class-transformer';

export class PaypalCreateProductResponseDto {
  @Expose()
  id: string;

  @Expose()
  name: string;

  @Expose()
  description: string;

  @Expose()
  create_time: string;

  @Type(() => PaypalLinkDto)
  @Expose()
  links: PaypalLinkDto[];
}
