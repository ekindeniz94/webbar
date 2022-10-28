import { GithubAppDto, GithubInstallationDto, GithubTokenDto, GithubUserDto } from './index';
import { GithubAuthorizedType } from '../../types';
import { Expose, Type } from 'class-transformer';
import { IsOptional } from 'class-validator';

export class GithubAuthorizedResponseDto {
  @Expose()
  type: GithubAuthorizedType;

  @Expose()
  callbackUrl: string;

  @Expose()
  redirectUri: string;

  @Type(() => GithubUserDto)
  @Expose()
  userInfo: GithubUserDto;

  @Type(() => GithubAppDto)
  @Expose()
  app: GithubAppDto;

  @IsOptional()
  @Type(() => GithubTokenDto)
  @Expose()
  tokens?: GithubTokenDto;

  @IsOptional()
  @Type(() => GithubInstallationDto)
  @Expose()
  installations?: GithubInstallationDto[];

  @IsOptional()
  @Expose()
  namespaceId?: string;

  @IsOptional()
  @Expose()
  installationsKey?: string;
}
