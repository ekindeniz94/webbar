import { Expose, Type } from 'class-transformer';
import { GithubUserDto } from './github-user.dto';
import { GithubTargetType } from '../../types/github-target-type.type';

export class GithubInstallationDto {
  @Type(() => Number)
  @Expose()
  id: number;

  @Type(() => Number)
  @Expose()
  app_id: number;

  @Expose()
  app_slug: string;

  @Type(() => GithubUserDto)
  @Expose()
  account: GithubUserDto;

  @Expose()
  repository_selection: string;

  @Expose()
  access_tokens_url: string;

  @Expose()
  repositories_url: string;

  @Expose()
  html_url: string;

  @Expose()
  target_id: number;

  @Expose()
  target_type: GithubTargetType;

  // permissions: {
  //   contents: 'write',
  //   metadata: 'read',
  //   administration: 'write',
  //   repository_hooks: 'write'
  // },
  // events: [
  //   'commit_comment',
  //   'create',
  //   'delete',
  //   'public',
  //   'push',
  //   'release',
  //   'repository'
  // ],

  @Expose()
  created_at: string;

  @Expose()
  updated_at: string;

  @Expose()
  single_file_name: string;

  @Type(() => Boolean)
  @Expose()
  has_multiple_single_files: boolean;

  @Expose()
  single_file_paths: string[];

  @Expose()
  suspended_by: string;

  @Expose()
  suspended_at: string;

  get appAvatar(): string {
    return `https://avatars.githubusercontent.com/in/${this.app_id}`;
  }
}
