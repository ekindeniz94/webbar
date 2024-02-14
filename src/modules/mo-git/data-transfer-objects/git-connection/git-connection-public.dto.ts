import { Expose, Type } from 'class-transformer';
import { GitConnectionTokenTypeEnum, GitConnectionTypeEnum } from '../../enums';
import { GithubUserDto } from '../github';
import { BaseEntityDto } from '@mo/database-dto';

export class GitConnectionPublicDto extends BaseEntityDto {
  @Expose()
  gitConnectionType: GitConnectionTypeEnum;

  @Expose()
  gitConnectionTokenType: GitConnectionTokenTypeEnum;

  @Type(() => GithubUserDto)
  @Expose()
  gitUser: GithubUserDto;
}
