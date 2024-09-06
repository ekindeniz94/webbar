import { ProjectNotificationSettingsTypeEnum } from '../../enums';
import { ProjectNotificationSettingsDto } from './project-notification-settings.dto';

export const defaultProjectNotificationSettings: ProjectNotificationSettingsDto[] = [
  /// services
  {
    enabled: true,
    type: ProjectNotificationSettingsTypeEnum.BuildError,
    title: 'Build failed',
    description: 'Notification for failures or issues encountered during the build process.',
    group: {
      type: 'services',
      title: 'Services'
    }
  },
  {
    enabled: true,
    type: ProjectNotificationSettingsTypeEnum.ServiceStatusError,
    title: 'Service status error',
    description: 'Notification for errors or critical issues related to service status.',
    group: {
      type: 'services',
      title: 'Services'
    }
  },
  {
    enabled: true,
    type: ProjectNotificationSettingsTypeEnum.HealthCheckError,
    title: 'Health check error',
    description: 'Notification for failures during service health checks.',
    group: {
      type: 'services',
      title: 'Services'
    }
  },
  /// resources
  {
    enabled: true,
    type: ProjectNotificationSettingsTypeEnum.ProjectResourcesWarning,
    title: 'Project resources warning',
    description: 'Notification when project resource usage exceeds 90% of the defined limit.',
    group: {
      type: 'resources',
      title: 'Resources'
    }
  },
  {
    enabled: true,
    type: ProjectNotificationSettingsTypeEnum.ServiceUsageWarning,
    title: 'Service usage warning',
    description: 'Notification when service usage exceeds 80% of the defined limit.',
    group: {
      type: 'resources',
      title: 'Resources'
    }
  },
  /// integrations
  {
    enabled: true,
    type: ProjectNotificationSettingsTypeEnum.GitIntegrationTokenExpiredWarning,
    title: 'Git integration token expired warning',
    description: 'Notification when a Git integration token expires.',
    group: {
      type: 'intgerations',
      title: 'Intgerations'
    }
  },
  {
    enabled: true,
    type: ProjectNotificationSettingsTypeEnum.GitIntegrationTokenRefreshError,
    title: 'Git integration token refresh error',
    description: 'Notification when there is an error refreshing a Git integration token.',
    group: {
      type: 'intgerations',
      title: 'Intgerations'
    }
  },
  /// users
  {
    enabled: true,
    type: ProjectNotificationSettingsTypeEnum.UserJoinedActivity,
    title: 'User joined activity',
    description: 'Notification when a user joins the project.',
    group: {
      type: 'users',
      title: 'Users'
    }
  }
];
