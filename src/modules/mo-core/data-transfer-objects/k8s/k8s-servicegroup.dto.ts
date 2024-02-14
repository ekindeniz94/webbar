import { Expose } from 'class-transformer';

export class K8sServiceGroupDto {
  @Expose()
  name: string;

  @Expose()
  setupCommands: string;

  @Expose()
  folder: string;
}
