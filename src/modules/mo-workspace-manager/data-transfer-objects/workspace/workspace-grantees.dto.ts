import { Expose, Transform, Type } from 'class-transformer';
import { isArray } from 'class-validator';
import { WorkspaceUserDto } from './workspace-user.dto';

export class WorkspaceGranteesDto {
  @Transform(({ value }) => (value && isArray(value) ? value : []))
  @Type(() => WorkspaceUserDto)
  @Expose()
  users: WorkspaceUserDto[];

  /**
   * TODO
   * teams: WorkspaceTeamDto[];
   */
}
