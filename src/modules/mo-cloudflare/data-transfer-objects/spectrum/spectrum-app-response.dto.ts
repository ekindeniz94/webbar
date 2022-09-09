import { Expose, Transform, Type } from 'class-transformer';
import { MoUtils } from '../../../../utils';
import { SpectrumAppResultDto } from './spectrum-app-result.dto';

export class SpectrumAppResponseDto {
  @Type(() => SpectrumAppResultDto)
  @Expose()
  result: SpectrumAppResultDto

  @Transform(({ value }) => MoUtils.parseBoolean(value))
  @Expose()
  success: boolean;

  @Expose()
  errors: any[];

  @Expose()
  messages: any[];
}
