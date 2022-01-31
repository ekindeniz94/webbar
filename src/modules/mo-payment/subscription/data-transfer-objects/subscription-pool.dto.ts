import { Expose } from 'class-transformer';
import { BaseEntityDto } from '../../../mo-core';

export class SubscriptionPoolDto extends BaseEntityDto {
  @Expose()
  name: string;
}
