import { Expose, Type } from 'class-transformer';
import { GithubAppDto } from '../../../../mo-git/data-transfer-objects/github/github-app.dto';
import { GithubUserDto } from '../../../../mo-git/data-transfer-objects/github/github-user.dto';
import { GithubAuthorizedType } from '../../../../mo-git/types/github-authorized.type';
import { IGithubAuthRedisData } from '../../../../mo-git/interfaces/github/github-auth-redis-data';
import { GithubInstallationDto } from '../../../../mo-git/data-transfer-objects/github/github-installation.dto';
import { GithubTokenDto } from '../../../../mo-git/data-transfer-objects/github/github-token.dto';

export class ConfirmAppConnectionResponseDto implements IGithubAuthRedisData {
  @Expose()
  type: GithubAuthorizedType;

  @Type(() => GithubUserDto)
  @Expose()
  userInfo: GithubUserDto;

  @Type(() => GithubAppDto)
  @Expose()
  app: GithubAppDto;

  @Expose()
  userId: string;

  @Expose()
  organizationId: string;

  @Expose()
  clusterId: string;

  @Expose()
  workspaceName: string;

  @Expose()
  callbackUrl: string;

  @Expose()
  connectionId?: string;

  @Type(() => GithubInstallationDto)
  @Expose()
  installations?: GithubInstallationDto[];

  @Expose()
  installationsKey?: string;

  @Type(() => GithubTokenDto)
  @Expose()
  token?: GithubTokenDto;
}
