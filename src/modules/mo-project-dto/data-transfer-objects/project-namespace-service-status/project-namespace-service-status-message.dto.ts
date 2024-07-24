import { Expose } from 'class-transformer';
import { ProjectNamespaceServiceStatusMessageTypeEnum } from '../../enums/project-namespace-service-status';

export class ProjectNamespaceServiceStatusMessageDto {
  @Expose()
  type: ProjectNamespaceServiceStatusMessageTypeEnum;

  @Expose()
  message: string;
}
