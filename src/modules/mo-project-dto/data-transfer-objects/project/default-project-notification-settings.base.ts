import { defaultProjectNotificationSettings } from './default-project-notification-settings';
import { ProjectNotificationSettingsBaseDto } from './project-notification-settings.base.dto';

export const defaultProjectNotificationSettingsBase: ProjectNotificationSettingsBaseDto[] =
  defaultProjectNotificationSettings.map((item) => {
    return {
      enabled: item.enabled,
      type: item.type
    };
  });
