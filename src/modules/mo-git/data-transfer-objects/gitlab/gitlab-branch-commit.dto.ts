import { Expose } from 'class-transformer';

export class GitlabBranchCommitDto {
  @Expose()
  id: string;

  @Expose()
  short_id: '4e1f5565';

  @Expose()
  created_at: string;

  @Expose()
  parent_ids: any;

  @Expose()
  title: string;

  @Expose()
  message: string;

  @Expose()
  author_name: string;

  @Expose()
  author_email: string;

  @Expose()
  authored_date: string;

  @Expose()
  committer_name: string;
  @Expose()
  committer_email: string;

  @Expose()
  committed_date: string;

  @Expose()
  trailers: any;

  @Expose()
  web_url: string;
}
