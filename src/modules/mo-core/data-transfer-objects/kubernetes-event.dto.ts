import { Expose, Type } from 'class-transformer';
import { IsOptional } from 'class-validator';
import { KubernetesEventMetaDto } from './kubernetes-event-meta.dto';
import { KubernetesEventStatusDto } from './kubernetes-event-status.dto';

export class KubernetesEventDto {
  @Expose()
  @Type(() => KubernetesEventMetaDto)
  meta: KubernetesEventMetaDto;

  @Expose()
  @Type(() => KubernetesEventStatusDto)
  status: KubernetesEventStatusDto;

  @Expose()
  summary: string;

  @Expose()
  timestamp: string;

  @Expose()
  @IsOptional()
  recommendations?: string[];
}
