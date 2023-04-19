import { Expose, Transform, Type } from 'class-transformer';
import moment from 'moment';
import { UserPublicDto } from '@mo/user-dto';

export abstract class BaseEntityDto2 {
  @Expose()
  id: string;

  @Type(() => UserPublicDto)
  @Expose()
  createdBy: UserPublicDto;

  @Transform(({ value }) => (value && value !== 'undefined' && value !== 'null' ? moment(value).toDate() : value))
  @Expose()
  createdAt: string | Date;

  @Transform(({ value }) => (value && value !== 'undefined' && value !== 'null' ? moment(value).toDate() : value))
  @Expose()
  updatedAt: string | Date;
}
