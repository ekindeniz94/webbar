import { Expose, Transform, Type } from 'class-transformer';
import { IsDateString, IsEnum, IsString, ValidateNested } from 'class-validator';
import moment from 'moment';
import { MoUtils } from '../../../../utils';
import { BaseEntityDto } from '../../../mo-core';
import { PlanStateEnum } from '../../enums/plan-state.enum';
import { CurrencyDto } from '../currency';

export class PlanCreateRequestDto extends BaseEntityDto {
  @IsString()
  @Transform(
    ({ value, obj }) => {
      if (value) {
        return value;
      }
      obj.id = MoUtils.nanoid();
      return obj.id;
    },
    { toClassOnly: true }
  )
  @Expose()
  id: string;

  @IsDateString()
  @Transform(
    ({ value, obj }) => {
      if (value) {
        return value;
      }
      obj.createdAt = moment().format();
      return obj.createdAt;
    },
    { toClassOnly: true }
  )
  @Expose()
  createdAt: string;

  @Expose()
  @IsString()
  productId: string;

  @Expose()
  @Type(() => CurrencyDto)
  @ValidateNested()
  currencies: CurrencyDto[];

  @Expose()
  @IsDateString()
  @Transform(
    ({ value, obj }) => {
      if (value) {
        return value;
      }
      obj.startedOn = moment().format();
      return obj.startedOn;
    },
    { toClassOnly: true }
  )
  startedOn: string;

  @Expose()
  @IsEnum(PlanStateEnum)
  @Transform(({ value }) => value ?? PlanStateEnum.ACTIVE)
  state: PlanStateEnum;
}
