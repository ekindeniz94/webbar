import { Expose, Transform, Type } from 'class-transformer';
import { MoUtils } from '../../../../utils';
import { SpectrumAppResultDto } from './spectrum-app-result.dto';
import { isArray } from 'class-validator';

export class SpectrumAppResponseListDto {
  @Transform(({ value }) => (value && isArray(value) ? value : []))
  @Type(() => SpectrumAppResultDto)
  @Expose()
  result: SpectrumAppResultDto[];

  @Transform(({ value }) => MoUtils.parseBoolean(value))
  @Expose()
  success: boolean;

  @Transform(({ value }) => (value && isArray(value) ? value : []))
  @Expose()
  errors: { code: string; message: string }[];

  @Expose()
  messages: any[];
}
