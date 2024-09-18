import { Expose, Transform, Type } from 'class-transformer';
import { IacManagerResourceStateDto } from './iac-manager-resource-state.dto';
import moment from 'moment';

export class IacResourceStatesItemDto {
  @Expose()
  fileName: string;

  @Transform(({ value }) => (value && value !== 'undefined' && value !== 'null' ? moment(value).toDate() : value))
  @Expose()
  lastUpdate: Date;

  @Type(() => IacManagerResourceStateDto)
  @Expose()
  data: IacManagerResourceStateDto;

  @Expose()
  get changesCount(): number {
    return this.data?.revisions?.length || 0;
  }

  @Expose()
  get lastUpdateFromNow(): string {
    if (!this.lastUpdate) {
      return '-';
    }
    return moment(this.lastUpdate).fromNow();
  }
}
