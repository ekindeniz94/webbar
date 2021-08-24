import { Expose, Transform, Type } from 'class-transformer';
import { ArrayMaxSize, isArray, IsDateString, IsEnum, IsString, ValidateNested } from 'class-validator';
import { SubscriptionDto } from '..';
import { BaseEntityDto, DTO_VALIDATION_CONST } from '../../../mo-core';

export class SubscriptionPoolCreateRequestDto extends BaseEntityDto {
  @Expose()
  @Type(() => SubscriptionDto)
  @Transform(({ value }) => (value && isArray(value) ? value : []))
  @ArrayMaxSize(DTO_VALIDATION_CONST.SUBSCRIPTION_POOL.MAX_SUBSCRIPTIONS)
  @ValidateNested()
  subscriptions: SubscriptionDto[];
}
