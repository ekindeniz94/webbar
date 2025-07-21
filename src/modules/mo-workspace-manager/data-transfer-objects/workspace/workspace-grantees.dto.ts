import { Expose, Transform, Type } from 'class-transformer';
import { isArray } from 'class-validator';
import { WorkspaceUserDto } from './workspace-user.dto';
import { WorkspaceTeamDto } from './workspace-team.dto';

export class WorkspaceGranteesDto {
  @Transform(({ value }) => (value && isArray(value) ? value : []))
  @Type(() => WorkspaceUserDto)
  @Expose()
  users: WorkspaceUserDto[];

  @Transform(({ value }) => (value && isArray(value) ? value : []))
  @Type(() => WorkspaceTeamDto)
  @Expose()
  teams: WorkspaceTeamDto[];

  @Expose()
  @Type(() => Date)
  createdAt: Date = new Date();

  @Expose()
  @Type(() => Date)
  updatedAt: Date = new Date();
  
  @Expose()
  @Type(() => String)
  createdBy: string;
}
