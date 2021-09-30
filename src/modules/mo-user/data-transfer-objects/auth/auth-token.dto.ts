import { Expose, Transform, Type } from 'class-transformer';
import moment from 'moment';
import { AuthTokenUserDto } from './auth-token-user.dto';
import { AuthTokenClientDto } from './auth-token-client.dto';

export class AuthTokenDto {
  private _lastVerifyToken: moment.Moment | null = null;

  @Expose()
  accessToken!: string;

  @Transform(({ value }) => moment(value), { toClassOnly: true })
  @Transform(({ value }) => moment(value).format(), { toPlainOnly: true })
  @Expose()
  accessTokenExpiresAt: moment.Moment; // '2020-12-08T13:20:29.123Z';

  @Expose()
  refreshToken: string; // 'cf3587ed9ee061f3fe821af236703525b596fad6';

  @Transform(({ value }) => moment(value), { toClassOnly: true })
  @Transform(({ value }) => moment(value).format(), { toPlainOnly: true })
  @Expose()
  refreshTokenExpiresAt: moment.Moment; // '2021-12-07T13:20:29.123Z';

  @Type(() => AuthTokenClientDto)
  @Expose()
  client: AuthTokenClientDto;

  @Type(() => AuthTokenUserDto)
  @Expose()
  user: AuthTokenUserDto;

  @Transform(() => 'Bearer')
  @Expose()
  tokenType: string;

  @Transform(({ value }) => value ?? 1)
  @Expose()
  verifyTokenTimer: number; // in min => 1 = 1min

  get verifyToken(): boolean {
    if (!this._lastVerifyToken) {
      this._lastVerifyToken = moment();
      return true;
    }
    return moment().isAfter(this._lastVerifyToken.clone().add(this.verifyTokenTimer, 'minutes'));
  }

  get isAccessTokenExpired(): boolean {
    return moment().isAfter(this.accessTokenExpiresAt);
  }

  get isRefreshTokenExpired(): boolean {
    return moment().isAfter(this.refreshTokenExpiresAt);
  }
}
