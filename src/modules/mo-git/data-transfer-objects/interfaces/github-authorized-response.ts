import { GithubAppDto, GithubInstallationDto, GithubTokenDto, GithubUserDto } from '../github';
import { GithubAuthorizedType } from '../types';

export interface IGithubAuthorizedResponse {
  type: GithubAuthorizedType;
  callbackUrl: string;
  redirectUri: string;
  userInfo: GithubUserDto;
  app: GithubAppDto;
  tokens?: GithubTokenDto;
  installations?: GithubInstallationDto[];
  installationsKey?: string;
}
