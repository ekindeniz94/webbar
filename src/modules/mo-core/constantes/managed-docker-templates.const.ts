import { IManagedDockerTemplate } from '../../mo-namespace';

export const MANAGED_DOCKER_TEMPLATES: IManagedDockerTemplate[] = [
  {
    id: 'wordpress',
    name: 'WordPress',
    dockerTemplateServices: [
      {
        id: 'mysql-8.0.23'
      },
      {
        id: 'wordpress-php8.0-apache'
      }
    ]
  }
];
