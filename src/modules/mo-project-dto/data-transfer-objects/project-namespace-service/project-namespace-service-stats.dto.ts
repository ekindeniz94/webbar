import { Expose, Type } from 'class-transformer';
import { CpuStatsDto, MemoryStatsDto, StorageStatsDto } from '../../../mo-namespace';
import { ProjectNamespaceServiceOriginTrafficDto } from './project-namespace-service-origin-traffic.dto';

export class ProjectNamespaceServiceStatsDto {
  @Expose()
  id: string;

  @Type(() => CpuStatsDto)
  @Expose()
  cpu: CpuStatsDto;

  @Type(() => MemoryStatsDto)
  @Expose()
  memory: MemoryStatsDto;

  @Type(() => StorageStatsDto)
  @Expose()
  ephemeralStorage: StorageStatsDto;

  // @Type(() => StorageStatsDto)
  // @Expose()
  // storage: StorageStatsDto;

  @Type(() => ProjectNamespaceServiceOriginTrafficDto)
  @Expose()
  traffic: ProjectNamespaceServiceOriginTrafficDto;
}
