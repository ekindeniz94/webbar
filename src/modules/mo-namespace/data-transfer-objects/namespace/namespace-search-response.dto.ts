import { NamespaceDto } from './namespace.dto';
import { GroupDto } from '../../../mo-user';
import { Expose, Type } from 'class-transformer';

export class NamespaceSearchResponseDto {
  @Type(() => NamespaceDto)
  @Expose()
  namespace: NamespaceDto;

  @Type(() => GroupDto)
  @Expose()
  group: GroupDto;
}
