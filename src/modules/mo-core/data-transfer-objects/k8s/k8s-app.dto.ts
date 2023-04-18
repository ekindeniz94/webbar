import { Expose } from 'class-transformer';
import { AppLibraryTypeEnum } from '../../../mo-app-library-dto';

export class K8sAppDto2 {
  @Expose()
  id: string;

  @Expose()
  name: string;

  @Expose()
  type: AppLibraryTypeEnum;

  @Expose()
  setupCommands: string;

  @Expose()
  repositoryLink: string;

  @Expose()
  containerImage: string;

  @Expose()
  containerImageCommand: string;

  @Expose()
  containerImageCommandArgs: string;
}
