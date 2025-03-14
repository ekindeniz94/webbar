import { Expose } from 'class-transformer';

export class GithubVariableDto {
  @Expose()
  name: string;

  @Expose()
  value: string;

  @Expose()
  created_at: string;

  @Expose()
  updated_at: string;
}
