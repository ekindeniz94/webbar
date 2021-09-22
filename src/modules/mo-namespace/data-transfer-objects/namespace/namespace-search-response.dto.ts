import { NamespacePublicDto } from './namespace-public.dto';
import { GroupDto } from '../../../mo-user';
import { Expose, Type } from 'class-transformer';

export class NamespaceSearchResponseDto {
  @Type(() => NamespacePublicDto)
  @Expose()
  namespace: NamespacePublicDto;

  @Type(() => GroupDto)
  @Expose()
  group: GroupDto;
}
