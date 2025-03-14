import { Expose, Transform, Type } from 'class-transformer';
import moment from 'moment';
import { BitbucketTokenAccessTypeEnum, GitConnectionTokenTypeEnum, GitConnectionTypeEnum } from '../../enums';
import { GithubAppDto, GithubInstallationDto, GithubUserDto } from '../github';
import { IsOptional, IsString } from 'class-validator';
import { BaseEntityDto } from '@mogenius/database-dto';
import { GitUserDto } from './git-user.dto';
import { IdDto } from '@mogenius/core-dto';

export class GitConnectionDto extends BaseEntityDto {
  //
  // @Expose()
  // @IsOptional()
  // @IsString()
  // login?: string;

  @Expose()
  installationId?: string;

  @Expose()
  gitConnectionType: GitConnectionTypeEnum;

  @Expose()
  gitConnectionTokenType: GitConnectionTokenTypeEnum;

  @Expose()
  @IsOptional()
  @IsString()
  accessToken?: string;

  @Transform(
    ({ value }) => {
      return value && moment(value).isValid() ? moment(value).format() : null;
    },
    { toClassOnly: true }
  )
  @IsOptional()
  @IsString()
  @Expose()
  accessTokenExpiresAt?: string;

  @IsOptional()
  @IsString()
  @Expose()
  refreshToken?: string;

  @Transform(
    ({ value }) => {
      return value && moment(value).isValid() ? moment(value).format() : null;
    },
    { toClassOnly: true }
  )
  @IsOptional()
  @IsString()
  @Expose()
  refreshTokenExpiresAt?: string;

  @Type(() => GithubInstallationDto)
  @IsOptional()
  @Expose()
  gitResponseData?: GithubInstallationDto;

  @Type(() => GitUserDto)
  @Expose()
  gitUser: GitUserDto;

  @Type(() => GithubAppDto)
  @IsOptional()
  @Expose()
  gitApp?: GithubAppDto;

  @IsOptional()
  @IsString()
  @Expose()
  customDomain?: string;

  @Expose()
  workspaceName?: string;

  @Type(() => IdDto)
  @Expose()
  cluster?: IdDto;

  @Expose()
  get isAccessTokenExpired(): boolean {
    return this.accessTokenExpiresAt && moment(this.accessTokenExpiresAt).isValid()
      ? moment().isAfter(this.accessTokenExpiresAt)
      : false;
  }

  @Expose()
  get isRefreshTokenExpired(): boolean {
    return this.refreshTokenExpiresAt && moment(this.refreshTokenExpiresAt).isValid()
      ? moment().isAfter(this.refreshTokenExpiresAt)
      : false;
  }

  @Expose()
  get tokenType(): string {
    switch (this.gitConnectionType) {
      case GitConnectionTypeEnum.GIT_HUB:
        return 'token';
      case GitConnectionTypeEnum.GIT_LAB:
        return 'Bearer';
      case GitConnectionTypeEnum.BITBUCKET:
        if (this.gitUser.type === BitbucketTokenAccessTypeEnum.APP_PASSWORD) {
          return 'Basic';
        }
        return 'Bearer';
      default:
        return 'Bearer';
    }
  }
}
