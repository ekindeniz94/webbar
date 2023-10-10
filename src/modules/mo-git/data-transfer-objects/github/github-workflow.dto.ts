import { Expose, Type } from 'class-transformer';

export class GithubWorkflowDto {
  @Type(() => Number)
  @Expose()
  id: number;

  @Expose()
  name: string;

  @Expose()
  badge_url: string;

  @Expose()
  created_at: string;

  @Expose()
  html_url: string;

  @Expose()
  node_id: string;

  @Expose()
  path: string;

  @Expose()
  state: string;

  @Expose()
  updated_at: string;

  @Expose()
  url: string;
}
