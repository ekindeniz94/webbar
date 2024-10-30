import { Expose } from 'class-transformer';
import { TransformToBoolean } from '@mogenius/js-utils';

export class K8sResourceEntryDto {
  @Expose()
  kind: string;

  @Expose()
  name: string;

  @TransformToBoolean(false)
  @Expose()
  namespaced: boolean;

  @Expose()
  group?: string;

  @Expose()
  version?: string;
}
