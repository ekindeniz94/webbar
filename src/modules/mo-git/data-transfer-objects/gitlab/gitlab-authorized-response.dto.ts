import { Expose, Type } from 'class-transformer';
import { IsOptional } from 'class-validator';
import { GitlabTokenDto } from './gitlab-token.dto';
import { GitlabAuthorizedType } from '../../types/githlab-authorized.type';
import { GitlabUserDto } from './gitlab-user.dto';

export class GitlabAuthorizedResponseDto {
  @Expose()
  type: GitlabAuthorizedType;

  @Expose()
  callbackUrl: string;

  @Expose()
  redirectUri: string;

  @Type(() => GitlabUserDto)
  @Expose()
  userInfo: GitlabUserDto;

  @IsOptional()
  @Type(() => GitlabTokenDto)
  @Expose()
  tokens?: GitlabTokenDto;

  @IsOptional()
  @Expose()
  namespaceId?: string;
}
