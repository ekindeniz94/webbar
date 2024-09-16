import { Expose } from 'class-transformer';

export class IacGitActionStatusDto {
  @Expose()
  commitMsg: string;

  @Expose()
  commitAuthor: string;

  @Expose()
  commitHash: string;

  @Expose()
  commitDate: string;

  @Expose()
  diff: string;

  @Expose()
  lastExecution: string;
}
