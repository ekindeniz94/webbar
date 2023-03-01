import { Expose, Transform, Type } from 'class-transformer';
import { BaseEntityDto } from '../../../mo-core';
import moment from 'moment';
import { GitConnectionTypeEnum } from '../../enums';
import { GithubAppDto, GithubInstallationDto, GithubUserDto } from '../github';
import { IsOptional, IsString } from 'class-validator';

export class GitConnectionDto extends BaseEntityDto {
  @Expose()
  @IsOptional()
  @IsString()
  login?: string;

  @Expose()
  gitConnectionType: GitConnectionTypeEnum;

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

  @Type(() => GithubUserDto)
  @Expose()
  gitUser: GithubUserDto;

  @Type(() => GithubAppDto)
  @IsOptional()
  @Expose()
  gitApp?: GithubAppDto;

  @IsOptional()
  @IsString()
  @Expose()
  secretToken?: string;

  get isAccessTokenExpired(): boolean {
    return this.accessTokenExpiresAt && moment(this.accessTokenExpiresAt).isValid()
      ? moment().isAfter(this.accessTokenExpiresAt)
      : false;
  }

  get isRefreshTokenExpired(): boolean {
    return this.refreshTokenExpiresAt && moment(this.refreshTokenExpiresAt).isValid()
      ? moment().isAfter(this.refreshTokenExpiresAt)
      : false;
  }
}
