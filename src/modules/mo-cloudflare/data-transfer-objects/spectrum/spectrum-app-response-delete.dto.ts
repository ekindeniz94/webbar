import { Expose, Transform } from 'class-transformer';
import { isArray } from 'class-validator';
import { MoUtils } from '@mo/js-utils';

export class SpectrumAppResponseDeleteDto {
  @Expose()
  result: {
    id: string;
  };

  @Transform(({ value }) => MoUtils.parseBoolean(value))
  @Expose()
  success: boolean;

  @Transform(({ value }) => (value && isArray(value) ? value : []))
  @Expose()
  errors: { code: string; message: string }[];

  @Expose()
  messages: any[];
}
