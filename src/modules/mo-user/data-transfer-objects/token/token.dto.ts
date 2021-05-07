import { Exclude, Expose } from 'class-transformer';
import moment from 'moment';
import { BaseEntityDto } from '../../../mo-core';

export class TokenDto extends BaseEntityDto {
  @Exclude()
  id: string;

  @Expose()
  userId: string;

  @Expose()
  device: string;

  @Expose()
  accessToken: string;

  @Expose()
  accessTokenExpiresAt: string;

  @Expose()
  refreshToken: string;

  @Expose()
  refreshTokenExpiresAt: string;

  get isAccessTokenExpired(): boolean {
    return moment().isAfter(this.accessTokenExpiresAt);
  }

  get isRefreshTokenExpired(): boolean {
    return moment().isAfter(this.refreshTokenExpiresAt);
  }
}
