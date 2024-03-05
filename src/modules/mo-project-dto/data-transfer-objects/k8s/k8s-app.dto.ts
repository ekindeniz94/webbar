import { Expose, Type } from 'class-transformer';
import { IdDto } from '@mo/core-dto';
import { ServiceControllerEnum } from '../../enums';

export class K8sAppDto {
  @Expose()
  id: string;

  @Type(() => IdDto)
  @Expose()
  organization: IdDto;

  @Expose()
  displayName: string;

  @Expose()
  controllerName: string;

  @Expose()
  controller: ServiceControllerEnum;

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
