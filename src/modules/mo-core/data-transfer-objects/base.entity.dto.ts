import { Expose, Type } from 'class-transformer';
import { UserPublicDto } from '../../mo-user/data-transfer-objects/user/user-public.dto';

export abstract class BaseEntityDto {
  @Expose()
  id: string;

  @Type(() => UserPublicDto)
  @Expose()
  createdBy: UserPublicDto;

  // TODO
  @Expose()
  createdAt: string | Date;

  // TODO
  @Expose()
  updatedAt: string | Date;
}
