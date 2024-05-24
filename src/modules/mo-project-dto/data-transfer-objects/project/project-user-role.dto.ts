import { Expose } from 'class-transformer';
import { ProjectDisplayNameDto } from './project-display-name.dto';

export class ProjectUserRoleDto extends ProjectDisplayNameDto {
  @Expose()
  role: string;
}
