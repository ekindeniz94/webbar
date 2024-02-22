import { Expose, Type } from 'class-transformer';
import { ICompilerLog } from '../interfaces';
import { ProjectNamespaceServiceCreateRequestDto } from '../../mo-project-dto';

export class ComposeResponseDto {
  @Type(() => ProjectNamespaceServiceCreateRequestDto)
  @Expose()
  services: ProjectNamespaceServiceCreateRequestDto[];

  @Expose()
  logs: ICompilerLog[];
}
