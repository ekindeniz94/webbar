import { Expose, Type } from 'class-transformer';
import { ProjectNamespaceServiceCreateRequestDto } from '../project-namespace-service';
import { ICompilerLog } from '@mo/mo-docker-compose';

export class ComposeResponseDto {
    @Type(() => ProjectNamespaceServiceCreateRequestDto)
    @Expose()
    services: ProjectNamespaceServiceCreateRequestDto[];
    
    @Expose()
    logs: ICompilerLog[];
  }