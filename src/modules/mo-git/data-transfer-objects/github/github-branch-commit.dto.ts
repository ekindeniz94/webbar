import { Expose } from 'class-transformer';

export class GithubBranchCommitDto {
  @Expose()
  sha: string;

  @Expose()
  url: string;
}
