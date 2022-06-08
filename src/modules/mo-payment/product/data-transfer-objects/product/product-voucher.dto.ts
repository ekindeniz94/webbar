import { Expose, Transform, Type } from 'class-transformer';
import { isArray } from 'class-validator';
import { UserPublicDto } from '../../../../mo-user';
import { DiscountTypeEnum } from '../../enums';
import { MoUtils } from '../../../../../utils';
import moment from 'moment';
import { BaseEntityDto } from '../../../../mo-core';

export class ProductVoucherDto extends BaseEntityDto {
  @Type(() => UserPublicDto)
  @Transform(({ value }) => (value && isArray(value) ? value : []))
  @Expose()
  allowedForUsers: UserPublicDto[];

  @Expose()
  name: string;

  @Expose()
  description: string;

  @Transform(({ value }) => value ?? DiscountTypeEnum.PERCENTAGE)
  @Expose()
  discountAmountType: DiscountTypeEnum;

  @Transform(({ value }) => value ?? 0)
  @Expose()
  discountAmount: number;

  @Transform(({ value }) => value ?? MoUtils.generatePassword(12, 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'))
  @Expose()
  code: string;

  @Type(() => Number)
  @Transform(({ value }) => value ?? -1)
  @Expose()
  maxCount: number;

  @Type(() => Number)
  @Transform(({ value }) => value ?? 1)
  @Expose()
  maxUserCount: number;

  @Transform(({ value }) => (value ? moment(value).toJSON() : value))
  @Expose()
  startedAt: Date;

  @Transform(({ value }) =>
    value
      ? moment(value).toJSON()
      : moment().add(1, 'months').set({ hour: 0, minute: 0, second: 0, millisecond: 0 }).toJSON()
  )
  @Expose()
  endedAt: Date;
}
