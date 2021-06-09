import { Expose, Type } from 'class-transformer';
import { BaseEntityDto } from '../../../mo-core';
import { NamespaceCommandState } from '../../enums';

export class CommandResponse extends BaseEntityDto {
  @Expose()
  id: string;

  @Expose()
  namespaceId: string;

  @Expose()
  title: string;

  @Expose()
  startedAt: string;

  @Expose()
  state: NamespaceCommandState;

  @Expose()
  durationMs: number;

  @Type(() => CommandResponse)
  @Expose()
  subCommands: CommandResponse[];
}
