import { Expose } from 'class-transformer';
import { BaseEntityDto } from '@mogenius/database-dto';
import { TransformToBoolean } from '@mogenius/js-utils';

export class ClusterNodeMachineStatsDto extends BaseEntityDto {
  @TransformToBoolean(false)
  @Expose()
  btfSupport: boolean;
}
