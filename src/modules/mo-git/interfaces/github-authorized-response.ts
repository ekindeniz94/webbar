import { GithubAppDto, GithubInstallationDto, GithubTokenDto, GithubUserDto } from '../data-transfer-objects/github';
import { GithubAuthorizedType } from '../types';

export interface IGithubAuthorizedResponse {
  type: GithubAuthorizedType;
  callbackUrl: string;
  redirectUri: string;
  userInfo: GithubUserDto;
  app: GithubAppDto;
  tokens?: GithubTokenDto;
  installations?: GithubInstallationDto[];
  namespaceId?: string;
  installationsKey?: string;
}
