export enum NamespaceServiceTypeEnum {
  DOCKER = 'docker',
  DOCKER_TEMPLATE = 'docker_template',
  NGINX = 'nginx',
  HTML = 'html'
}

export const ALL_NAMESPACE_SERVICE_TYPES = [
  NamespaceServiceTypeEnum.DOCKER,
  NamespaceServiceTypeEnum.DOCKER_TEMPLATE,
  NamespaceServiceTypeEnum.NGINX,
  NamespaceServiceTypeEnum.HTML
];
