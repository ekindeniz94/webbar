export enum ProjectNotificationSettingsTypeEnum {
  /// service
  BuildError = 'BUILD_ERROR',
  ServiceStatusError = 'SERVICE_STATUS_ERROR',
  HealthCheckError = 'HEALTH_CHECK_ERROR',
  /// resources
  ProjectResourcesWarning = 'PROJECT_RESOURCES_WARNING',
  ServiceUsageWarning = 'SERVICE_USAGE_WARNING',
  /// integration
  GitIntegrationTokenExpiredWarning = 'GIT_INTEGRATION_TOKEN_EXPIRED_WARNING',
  GitIntegrationTokenRefreshError = 'GIT_INTEGRATION_TOKEN_REFRESH_ERROR',
  /// user
  UserJoinedActivity = 'USER_JOINED_ACTIVITY'
}
