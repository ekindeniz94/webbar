import { Expose, Type } from 'class-transformer';
import { IsOptional } from 'class-validator';
import { GitlabAuthorizedType } from '../../types/githlab-authorized.type';
import { BitbucketUserDto } from './bitbucket-user.dto';
import { BitbucketTokenDto } from './bitbucket-token.dto';

export class BitbucketAuthorizedResponseDto {
  @Expose()
  type: GitlabAuthorizedType;

  @Expose()
  callbackUrl: string;

  @Expose()
  redirectUri: string;

  @Type(() => BitbucketUserDto)
  @Expose()
  userInfo: BitbucketUserDto;

  @IsOptional()
  @Type(() => BitbucketTokenDto)
  @Expose()
  tokens?: BitbucketTokenDto;

  @IsOptional()
  @Expose()
  namespaceId?: string;
}
