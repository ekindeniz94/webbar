import { Expose } from 'class-transformer';
import { AppDto } from '../../../mo-app-library-dto';
import { IdDto } from '@mo/core-dto';
import { ProjectNamespaceServiceCreateRequestDto } from './project-namespace-service-create-request.dto';

export class ProjectNamespaceServiceDockerComposeResponseDto {
  @Expose()
  services: ProjectNamespaceServiceCreateRequestDto[];

  @Expose()
  apps: {
    id: IdDto;
    app: AppDto;
  }[];
}
