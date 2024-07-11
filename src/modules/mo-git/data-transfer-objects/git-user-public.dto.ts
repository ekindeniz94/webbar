import { Expose } from 'class-transformer';

export class GitUserPublicDto {
  @Expose()
  name: string;

  @Expose()
  avatar_url: string;

  @Expose()
  company: string;

  @Expose()
  type: string;

  @Expose()
  workspace: string;
}
