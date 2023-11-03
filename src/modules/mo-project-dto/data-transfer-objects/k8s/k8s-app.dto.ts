import { Expose, Type } from 'class-transformer';
import { AppLibraryTypeEnum } from '../../../mo-app-library-dto';
import { IdDto } from '@mo/core-dto';

export class K8sAppDto {
  @Expose()
  id: string;

  @Type(() => IdDto)
  @Expose()
  organization: IdDto;

  @Expose()
  name: string;

  @Expose()
  type: AppLibraryTypeEnum;

  @Expose()
  setupCommands: string;

  @Expose()
  repositoryLink: string;

  @Expose()
  repositoryUser?: string;

  @Expose()
  repositoryPAT?: string;

  @Expose()
  containerImage: string;

  @Expose()
  containerImageRepoSecret?: string;

  @Expose()
  containerImageCommand: string;

  @Expose()
  containerImageCommandArgs: string;
}
