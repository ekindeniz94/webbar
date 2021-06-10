import { Expose, Type } from 'class-transformer';
import { NamespaceCommandStateEnum } from '../../enums';

export class NamespaceCommandResponseDto {
  @Expose()
  id: string;

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

  @Type(() => NamespaceCommandResponseDto)
  @Expose()
  subCommands: NamespaceCommandResponseDto[];
}
