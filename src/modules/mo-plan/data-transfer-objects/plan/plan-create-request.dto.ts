import { Expose, Transform, Type } from 'class-transformer';
import { IsDateString, IsEnum, IsNumber, IsString, ValidateNested } from 'class-validator';
import moment from 'moment';
import { CurrencyDto } from '../currency';
import { PlanStateEnum } from '../../enums';

export class PlanCreateRequestDto {
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

  @Expose()
  @Transform(({ value }) => value ?? 0)
  @IsNumber()
  order: number;
}
