import { Expose } from 'class-transformer';
import { ProjectNamespaceServicePortBindingEnum } from '../../mo-project-dto';
import { BaseEntityDto } from '@mo/database-dto';

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
