import { Expose, Type } from 'class-transformer';
import { BaseEntityDto } from '../../../mo-core';
import { GitConnectionTypeEnum, GitConnectionTokenTypeEnum } from '../../enums';
import { GithubUserDto } from '../github';

export class GitConnectionPublicDto extends BaseEntityDto {
  @Expose()
  gitConnectionType: GitConnectionTypeEnum;

  @Expose()
  gitConnectionTokenType: GitConnectionTokenTypeEnum;

  @Type(() => GithubUserDto)
  @Expose()
  gitUser: GithubUserDto;
}
