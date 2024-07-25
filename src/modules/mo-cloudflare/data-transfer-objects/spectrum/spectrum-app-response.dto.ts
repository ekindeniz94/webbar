import { Expose, Type } from 'class-transformer';
import { SpectrumAppResultDto } from './spectrum-app-result.dto';
import { TransformToBoolean } from '@mogenius/js-utils';

export class SpectrumAppResponseDto {
  @Type(() => SpectrumAppResultDto)
  @Expose()
  result: SpectrumAppResultDto;

  @TransformToBoolean(false)
  @Expose()
  success: boolean;

  @Expose()
  errors: any[];

  @Expose()
  messages: any[];
}
