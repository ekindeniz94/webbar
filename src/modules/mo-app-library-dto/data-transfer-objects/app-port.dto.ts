import { Expose } from 'class-transformer';
import { BaseEntityDto } from '../../mo-core';
import { ProjectNamespaceServicePortBindingEnum } from '../../mo-project-dto';

export class AppPortDto extends BaseEntityDto {
  @Expose()
  portType: ProjectNamespaceServicePortBindingEnum;

  @Expose()
  internalPort: number;

  @Expose()
  externalPort: number;

  @Expose()
  expose: boolean;
}
