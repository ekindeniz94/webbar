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
    title: 'Service status',
    description: 'A service encountered errors with deployments or pods.',
    group: {
      type: 'services',
      title: 'Services'
    }
  },
  {
    enabled: true,
    type: ProjectNotificationSettingsTypeEnum.HealthCheckError,
    title: 'Health checks',
    description: 'Health checks for a service failed.',
    group: {
      type: 'services',
      title: 'Services'
    }
  },
  /// resources
  {
    enabled: true,
    type: ProjectNotificationSettingsTypeEnum.ProjectResourcesWarning,
    title: 'Project resources',
    description: 'The allocated resources in a project have exceeded 90% of the defined limits.',
    group: {
      type: 'resources',
      title: 'Resources'
    }
  },
  {
    enabled: true,
    type: ProjectNotificationSettingsTypeEnum.ServiceUsageWarning,
    title: 'Service resource usage',
    description: 'A service has exceeded 80% of its resource limits within the last 15 minutes.',
    group: {
      type: 'resources',
      title: 'Resources'
    }
  },
  /// integrations
  {
    enabled: true,
    type: ProjectNotificationSettingsTypeEnum.GitIntegrationTokenExpiredWarning,
    title: 'Git integration token expired',
    description: 'The token for the Git integration in a project has expired.',
    group: {
      type: 'intgerations',
      title: 'Intgerations'
    }
  },
  {
    enabled: true,
    type: ProjectNotificationSettingsTypeEnum.GitIntegrationTokenRefreshError,
    title: 'Git integration refresh failed',
    description: 'The Git integration encountered an error when attempting to refresh the token.',
    group: {
      type: 'intgerations',
      title: 'Intgerations'
    }
  },
  /// users
  {
    enabled: true,
    type: ProjectNotificationSettingsTypeEnum.UserJoinedActivity,
    title: 'New project member',
    description: 'A new team member has joined the project by invitation.',
    group: {
      type: 'users',
      title: 'Users'
    }
  }
];
