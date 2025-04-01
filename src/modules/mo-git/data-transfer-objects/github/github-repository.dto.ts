import { Expose, Type } from 'class-transformer';
import { GithubActorDto } from './github-actor.dto';

export class GithubRepositoryDto {
  @Expose()
  id: number;

  @Expose()
  node_id: string;

  @Expose()
  name: string;

  @Expose()
  full_name: string;

  @Expose()
  private: boolean;

  @Type(() => GithubActorDto)
  @Expose()
  owner: GithubActorDto;

  @Expose()
  html_url: string;

  @Expose()
  description: string | null;

  @Expose()
  fork: boolean;

  @Expose()
  url: string;

  // @Expose()
  // [key: string]: any;
}
