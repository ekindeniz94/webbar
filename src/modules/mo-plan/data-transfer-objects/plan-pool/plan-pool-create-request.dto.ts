import { Expose, Transform, Type } from 'class-transformer';
import { ArrayMaxSize, isArray, ValidateNested } from 'class-validator';
import { BaseEntityDto, DTO_VALIDATION_CONST } from '../../../mo-core';
import { PlanDto } from '../plan/plan.dto';

export class PlanPoolCreateRequestDto extends BaseEntityDto {
  @Expose()
  @Type(() => PlanDto)
  @Transform(({ value }) => (value && isArray(value) ? value : []))
  @ArrayMaxSize(DTO_VALIDATION_CONST.PLAN_POOL.MAX_PLANS)
  @ValidateNested()
  plans: PlanDto[];
}
