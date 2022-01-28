import { PaypalLinkDto } from './resource';
import { Expose, Type } from 'class-transformer';
import { PaypalCreatePlanStatusEnum } from '../enums';

export class PaypalCreatePlanResponseDto {
  @Expose()
  id: string;

  @Expose()
  product_id: string;

  @Expose()
  name: string;

  @Expose()
  status: PaypalCreatePlanStatusEnum;

  @Expose()
  description: string;

  @Expose()
  usage_type: string; // LICENSED;

  @Expose()
  create_time: string;

  @Type(() => PaypalLinkDto)
  @Expose()
  links: PaypalLinkDto[];
}
