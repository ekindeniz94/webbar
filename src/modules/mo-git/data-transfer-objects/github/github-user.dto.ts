import { Expose } from 'class-transformer';

export class GithubUserDto {
  @Expose()
  id: string;

  @Expose()
  email: string;

  @Expose()
  name: string;

  @Expose()
  login: string;

  @Expose()
  avatar_url: string;

  @Expose()
  type: string;

  @Expose()
  company: string;

  @Expose()
  blog: string;

  @Expose()
  location: string;

  @Expose()
  twitter_username: string;
}
