import { Expose, Transform, Type } from 'class-transformer';
import { UserPublicDto } from '../../mo-user/data-transfer-objects/user/user-public.dto';
import moment from 'moment';

export abstract class BaseEntityDto {
  @Expose()
  id: string;

  @Type(() => UserPublicDto)
  @Expose()
  createdBy: UserPublicDto;

  @Transform(({ value }) => (value ? moment(value).toJSON() : value))
  @Expose()
  createdAt: string | Date;

  @Transform(({ value }) => (value ? moment(value).toJSON() : value))
  @Expose()
  updatedAt: string | Date;
}
