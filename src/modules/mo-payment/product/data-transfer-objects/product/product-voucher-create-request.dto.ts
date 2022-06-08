import { Expose, Transform, Type } from 'class-transformer';
import { isArray, IsEnum, IsNotEmpty, IsNumber, IsOptional, IsString, Min } from 'class-validator';
import { UserPublicDto } from '../../../../mo-user';
import { DiscountTypeEnum } from '../../enums';
import { MoUtils } from '../../../../../utils';
import moment from 'moment';

export class ProductVoucherCreateRequestDto {
  @IsOptional()
  @Type(() => UserPublicDto)
  @Transform(({ value }) => (value && isArray(value) ? value : []))
  @Expose()
  allowedForUsers: UserPublicDto[];

  @IsOptional()
  @IsString()
  @Expose()
  name: string;

  @IsOptional()
  @IsString()
  @Expose()
  description: string;

  @IsNotEmpty()
  @IsEnum(DiscountTypeEnum)
  @Expose()
  discountAmountType: DiscountTypeEnum;

  @IsNotEmpty()
  @Type(() => Number)
  @IsNumber()
  @Expose()
  discountAmount: number;

  @IsNotEmpty()
  @IsString()
  @Transform(({ value }) => value ?? MoUtils.generatePassword(12, 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'))
  @Expose()
  code: string;

  @IsNotEmpty()
  @Type(() => Number)
  @Transform(({ value }) => value ?? -1)
  @IsNumber()
  @Expose()
  maxCount: number;

  @IsNotEmpty()
  @Type(() => Number)
  @Transform(({ value }) => value ?? 1)
  @IsNumber()
  // @Min(1)
  @Expose()
  maxUserCount: number;

  @IsNotEmpty()
  @Transform(({ value }) => (value ? moment(value).toJSON() : value))
  @Expose()
  startedAt: Date;

  @IsNotEmpty()
  @Transform(({ value }) => (value ? moment(value).toDate() : moment().add(1, 'months').toJSON()))
  @Expose()
  endedAt: Date;
}
