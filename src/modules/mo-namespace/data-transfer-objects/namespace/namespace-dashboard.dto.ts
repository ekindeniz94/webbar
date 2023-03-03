import { NamespaceDto } from './namespace.dto';
import { Expose, Type } from 'class-transformer';
import { UserPublicDto } from '@mo/user-dto';

export class NamespaceDashboardDto {
  @Type(() => NamespaceDto)
  @Expose()
  namespace: NamespaceDto;

  @Type(() => UserPublicDto)
  @Expose()
  owner: UserPublicDto;
}
