import { Expose } from 'class-transformer';
import moment from 'moment';

export class TokenDto {
  @Expose()
  createdBy: string;

  @Expose()
  createdAt: string;

  @Expose()
  updatedAt: string;

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
