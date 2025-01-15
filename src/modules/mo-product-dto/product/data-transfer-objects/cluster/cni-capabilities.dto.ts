import { Expose } from 'class-transformer';
import { TransformToBoolean } from '@mogenius/js-utils';

export class CniCapabilitiesDto {
  @TransformToBoolean(false)
  @Expose()
  portMappings: boolean;

  @TransformToBoolean(false)
  @Expose()
  bandwidth: boolean;
}
