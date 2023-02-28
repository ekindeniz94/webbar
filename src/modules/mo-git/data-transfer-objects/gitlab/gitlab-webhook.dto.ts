import { Expose, Transform, Type } from 'class-transformer';
import { IsString } from 'class-validator';

export enum GitlabEventEnum {
  PUSH = 'Push Hook'
}

export class GitlabCommit {
  @Expose()
  @IsString()
  id: string;

  @Expose()
  @IsString()
  message: string;

  @Expose()
  @Transform((item) => item.value.name)
  @IsString()
  author: string;
}

export class GitlabRepository {
  @Expose()
  @IsString()
  name: string;
  @Expose()
  @IsString()
  git_http_url: string;
}

export class GitlabWebhook {
  @Expose()
  @IsString()
  ref: string;

  @Expose()
  @IsString()
  after: string;

  @Expose()
  @Type(() => GitlabRepository)
  repository: GitlabRepository;

  @Expose()
  @Type(() => GitlabCommit)
  commits: GitlabCommit[];
}
