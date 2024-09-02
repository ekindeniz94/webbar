import { ProjectNotificationSettingsTypeEnum } from '../../enums';
import { ProjectNotificationSettingsDto } from './project-notification-settings.dto';

export const defaultProjectNotificationSettings: ProjectNotificationSettingsDto[] = [
  /// services
  {
    enabled: true,
    type: ProjectNotificationSettingsTypeEnum.FailingBuild,
    title: 'Failing build',
    description: 'Receive notifications about failing builds',
    group: {
      type: 'services',
      title: 'Services'
    }
  },
  /// integrations
  /// cluster
  /// users
  /// @todo: only for testing, remove
  {
    enabled: true,
    type: ProjectNotificationSettingsTypeEnum.Testing,
    title: 'Testing',
    description: 'Testing description',
    group: {
      type: 'tests',
      title: 'Tests'
    }
  }
];
