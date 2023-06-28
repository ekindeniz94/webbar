import { Expose } from 'class-transformer';
import { BuildStateEnum } from 'src/mo-core-base';

export class ProjectCiCdNamespaceServiceBuildDto {
  @Expose()
  buildId: string;

  @Expose()
  buildState: BuildStateEnum;

  @Expose()
  commitAuthor: string;

  @Expose()
  commitMessage: string;

  @Expose()
  duration: number;

  @Expose()
  id: string;

  @Expose()
  createdAt: Date;

  @Expose()
  updatedAt: Date;

  @Expose()
  commitHash: string;

  @Expose()
  commitLink: string;

  @Expose()
  durationInMs: number;
}
