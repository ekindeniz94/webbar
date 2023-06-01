import { Expose } from 'class-transformer';

export class ProjectNamespaceServiceHostListItemDto {
  @Expose()
  serviceId: string;

  @Expose()
  serviceDisplayName: string;

  @Expose()
  controllerName: string;

  @Expose()
  containerDisplayName: string;

  @Expose()
  containerName: string;
}
