import { Expose, Transform } from 'class-transformer';
import { isString } from 'class-validator';
import { PROJECT_CONST } from '../../mo-project-dto.const';
import { MoProjectDtoUtils } from '../../mo-project-dto.utils';
import { ProjectStateEnum } from '../../enums';
import { ProjectDisplayNameDto } from './project-display-name.dto';

export class ProjectUserRoleDto extends ProjectDisplayNameDto {
  @Expose()
  role: string;
}
