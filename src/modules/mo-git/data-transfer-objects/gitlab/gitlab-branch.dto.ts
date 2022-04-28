import { Expose, Type } from 'class-transformer';
import { GitlabBranchCommitDto } from './gitlab-branch-commit.dto';
import { GitConnectionTypeEnum } from '../../enums';

export class GitlabBranchDto {
  readonly type: GitConnectionTypeEnum.GIT_LAB = GitConnectionTypeEnum.GIT_LAB;

  @Expose()
  name: string;

  @Type(() => GitlabBranchCommitDto)
  @Expose()
  commit: GitlabBranchCommitDto;

  @Type(() => Boolean)
  @Expose()
  merged: boolean;

  @Type(() => Boolean)
  @Expose()
  protected: boolean;

  @Type(() => Boolean)
  @Expose()
  developers_can_push: boolean;

  @Type(() => Boolean)
  @Expose()
  developers_can_merge: boolean;

  @Type(() => Boolean)
  @Expose()
  can_push: boolean;

  @Type(() => Boolean)
  @Expose()
  default: boolean;

  @Expose()
  web_url: string;
}
