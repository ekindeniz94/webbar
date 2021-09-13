import { Expose, Transform, Type } from 'class-transformer';
import { IsDateString, IsEnum, IsString, ValidateNested } from 'class-validator';
import moment from 'moment';
import { MoUtils } from '../../../../utils';
import { BaseEntityDto } from '../../../mo-core';
import { PlanStateEnum } from '../../enums/plan-state.enum';
import { ProductDto } from '../product';

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
      obj.createdAt = moment().toISOString();
      return obj.createdAt;
    },
    { toClassOnly: true }
  )
  @Expose()
  createdAt: string;

  @Expose()
  @Type(() => ProductDto)
  @ValidateNested()
  product: ProductDto;

  @Expose()
  @IsDateString()
  @Transform(
    ({ value, obj }) => {
      if (value) {
        return value;
      }
      obj.startedOn = moment().toISOString();
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
