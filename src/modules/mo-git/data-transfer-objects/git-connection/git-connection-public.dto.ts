import { Expose, Transform, Type } from 'class-transformer';
import { GitConnectionTokenTypeEnum, GitConnectionTypeEnum } from '../../enums';
import { BaseEntityDto } from '@mogenius/database-dto';
import moment from 'moment';
import { IsOptional, IsString } from 'class-validator';
import { GitUserPublicDto } from '../git-user-public.dto';

export class GitConnectionPublicDto extends BaseEntityDto {
  @Expose()
  gitConnectionType: GitConnectionTypeEnum;

  @Expose()
  gitConnectionTokenType: GitConnectionTokenTypeEnum;

  @Type(() => GitUserPublicDto)
  @Expose()
  gitUser: GitUserPublicDto;

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
