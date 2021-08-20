import { Expose, Type } from 'class-transformer';
import { NamespaceCommandStateEnum } from '../../enums';
import { BaseEntityDto } from '../../../mo-core';

export class NamespaceCommandDto extends BaseEntityDto{
  @Expose()
  namespaceId: string;

  @Expose()
  title: string;

  @Expose()
  startedAt: string;

  @Expose()
  state: NamespaceCommandStateEnum;

  @Expose()
  durationMs: number;

  @Type(() => NamespaceCommandDto)
  @Expose()
  subCommands: NamespaceCommandDto[];
}
