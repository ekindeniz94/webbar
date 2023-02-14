import { Expose } from 'class-transformer';

export class GitlabUserDto {
  @Expose()
  id: string;
  @Expose()
  email: string;
  @Expose()
  name: string;
  @Expose()
  username: string;
  @Expose()
  avatar_url: string;
  @Expose()
  type: string;
  @Expose()
  organization: string;
  @Expose()
  location: string;
}
