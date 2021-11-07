import { Expose } from 'class-transformer';

export class GithubBranchDto {
  // {sha: '9a0f67d67dbc19a3e83cf8516a15a6f56dd3ea80', url: 'https://api.github.com/repos/behrangal/test/commits/9a0f67d67dbc19a3e83cf8516a15a6f56dd3ea80'}
  @Expose()
  commit: any;

  @Expose()
  name: string;

  @Expose()
  protected: boolean;
}
