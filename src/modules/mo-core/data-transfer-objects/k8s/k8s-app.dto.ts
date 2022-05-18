import { Expose } from 'class-transformer';
import { AppLibraryTypeEnum } from '../../../mo-app-library';

export class K8sAppDto {
  @Expose()
  name: string;

  @Expose()
  type: AppLibraryTypeEnum;

  @Expose()
  setupCommands: string;

  @Expose()
  repositoryLink: string;
}
