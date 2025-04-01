import { Expose } from 'class-transformer';

export class GithubHeadCommitDto {
  @Expose()
  id: string;

  @Expose()
  tree_id: string;

  @Expose()
  message: string;

  @Expose()
  timestamp: string;

  @Expose()
  author: {
    name: string;
    email: string;
  };

  @Expose()
  committer: {
    name: string;
    email: string;
  };
}
