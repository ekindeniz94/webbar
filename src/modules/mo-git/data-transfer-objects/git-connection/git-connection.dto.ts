import { Expose, Transform, Type } from 'class-transformer';
import { BaseEntityDto } from '../../../mo-core';
import moment from 'moment';
import { GitConnectionTypeEnum } from '../../enums';

export class GitConnectionDto extends BaseEntityDto {
  @Expose()
  gitConnectionType: GitConnectionTypeEnum;

  @Expose()
  gitUserId: string;

  @Expose()
  installationId: string;

  @Expose()
  accessToken: string;

  @Transform(({ value }) => moment(value).format(), { toClassOnly: true })
  @Expose()
  accessTokenExpiresAt: string;

  @Expose()
  refreshToken: string;

  @Transform(({ value }) => moment(value).format(), { toClassOnly: true })
  @Expose()
  refreshTokenExpiresAt: string;

  get isAccessTokenExpired(): boolean {
    return moment().isAfter(this.accessTokenExpiresAt);
  }

  get isRefreshTokenExpired(): boolean {
    return moment().isAfter(this.refreshTokenExpiresAt);
  }
}
