import { Expose, Transform } from 'class-transformer';
import { isArray } from 'class-validator';
import { TransformToBoolean } from '@mogenius/js-utils';

export class SpectrumAppResponseDeleteDto {
  @Expose()
  result: {
    id: string;
  };

  @TransformToBoolean(false)
  @Expose()
  success: boolean;

  @Transform(({ value }) => (value && isArray(value) ? value : []))
  @Expose()
  errors: { code: string; message: string }[];

  @Expose()
  messages: any[];
}
