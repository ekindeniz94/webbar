export interface IGithubAuthRedisData {
  userId: string;
  organizationId: string;
  clusterId: string;

  workspaceName: string;

  callbackUrl: string;

  connectionId?: string;
}

