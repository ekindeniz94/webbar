import { Expose } from 'class-transformer';

export class K8sAppDto {
  @Expose()
  name: string;

  @Expose()
  setupCommands: string;

  @Expose()
  repositoryLink: string;
}
