import { Expose, Transform, Type } from 'class-transformer';
import { IsDateString, IsEnum, IsInt, IsString, ValidateNested } from 'class-validator';
import moment from 'moment';
import { PlanStateEnum } from '../../enums';
import { CurrencyCreateRequestDto } from '../currency';

export class PlanCreateRequestDto {
  @Expose()
  @IsString()
  productId: string;

  @Expose()
  @IsString()
  name: string;

  @Expose()
  @IsString()
  description: string;

  @Expose()
  @Type(() => CurrencyCreateRequestDto)
  @ValidateNested()
  currencies: CurrencyCreateRequestDto[];

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
  @IsInt()
  order: number;
}
