import { NamespaceDto } from './namespace.dto';
import { Expose, Type } from 'class-transformer';
import { GroupDto } from '@mo/user-dto';

export class NamespaceSearchResponseDto {
  @Type(() => NamespaceDto)
  @Expose()
  namespace: NamespaceDto;

  @Type(() => GroupDto)
  @Expose()
  group: GroupDto;
}
