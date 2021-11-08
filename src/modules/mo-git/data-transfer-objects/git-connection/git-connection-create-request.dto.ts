import { Expose, Transform, Type } from 'class-transformer';
import moment from 'moment';
import { IsNotEmpty, IsString, IsDateString } from 'class-validator';

export class GitConnectionCreateRequestDto {
  @IsNotEmpty()
  @IsString()
  @Expose()
  gitUserId: string;

  @IsNotEmpty()
  @IsString()
  @Expose()
  installationId: string;

  @IsNotEmpty()
  @IsString()
  @Expose()
  accessToken: string;

  @IsDateString()
  @Transform(({ value }) => moment(value).format(), { toClassOnly: true })
  @Expose()
  accessTokenExpiresAt: string;

  @IsNotEmpty()
  @IsString()
  @Expose()
  refreshToken: string;

  @IsDateString()
  @Transform(({ value }) => moment(value).format(), { toClassOnly: true })
  @Expose()
  refreshTokenExpiresAt: string;
}
