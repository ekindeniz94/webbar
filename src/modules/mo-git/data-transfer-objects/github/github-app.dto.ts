import { GithubUserDto } from './github-user.dto';
import { Expose, Type } from 'class-transformer';

export class GithubAppDto {
  @Type(() => Number)
  @Expose()
  id: number;

  @Expose()
  name: string;

  @Expose()
  slug: string;

  @Expose()
  node_id: string;

  @Type(() => GithubUserDto)
  @Expose()
  owner: GithubUserDto;

  @Expose()
  description: string;

  @Expose()
  external_url: string;

  @Expose()
  html_url: string;

  @Expose()
  created_at: string;

  @Expose()
  updated_at: string;

  @Expose()
  permissions: { [key: string]: 'write' | 'read' };

  @Expose()
  events: string[];

  @Type(() => Number)
  @Expose()
  installations_count: number;

  get avatar(): string {
    return `https://avatars.githubusercontent.com/in/${this.id}`;
  }
}
