import { Expose, Transform, Type } from 'class-transformer';
import { TransformToBoolean } from '@mogenius/js-utils';
import { isNumber, isNumberString } from 'class-validator';

export class ExistsServiceInClusterResponseDto {
  @TransformToBoolean(false)
  @Expose()
  exists: boolean;

  @Type(() => Number)
  @Transform(({ value }) => (value && (isNumber(value) || isNumberString(value)) ? value : 0))
  @Expose()
  replicas: number;

  @TransformToBoolean(true)
  @Expose()
  suspend: boolean;
}
