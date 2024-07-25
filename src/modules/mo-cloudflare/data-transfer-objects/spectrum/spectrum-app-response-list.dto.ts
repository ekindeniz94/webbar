import { Expose, Transform, Type } from 'class-transformer';
import { SpectrumAppResultDto } from './spectrum-app-result.dto';
import { isArray } from 'class-validator';
import { TransformToBoolean } from '@mogenius/js-utils';

export class SpectrumAppResponseListDto {
  @Transform(({ value }) => (value && isArray(value) ? value : []))
  @Type(() => SpectrumAppResultDto)
  @Expose()
  result: SpectrumAppResultDto[];

  @TransformToBoolean(false)
  @Expose()
  success: boolean;

  @Transform(({ value }) => (value && isArray(value) ? value : []))
  @Expose()
  errors: { code: string; message: string }[];

  @Expose()
  messages: any[];
}
