import { Expose } from 'class-transformer';
import { K8sBuildStateEnum } from '../../enums';

export class BuildJobPayloadDto {
  @Expose()
  jobId: string;

  @Expose()
  projectId: string;

  @Expose()
  namespaceId: string;

  @Expose()
  namespace: string;

  @Expose()
  serviceId: string;

  @Expose()
  controllerName: string;

  @Expose()
  gitRepo: string;

  @Expose()
  gitBranch: string;

  @Expose()
  gitCommitAuthor: string;

  @Expose()
  gitCommitHash: string;

  @Expose()
  gitCommitMessage: string;

  @Expose()
  dockerFile: string;

  @Expose()
  dockerContext: string;

  @Expose()
  containerRegistryPath: string;

  @Expose()
  containerRegistryUrl: string;

  @Expose()
  startTimestamp: string;

  @Expose()
  injectDockerEnvVars: string;

  @Expose()
  state: K8sBuildStateEnum;

  @Expose()
  startedAt: string;

  @Expose()
  durationMs: number;

  @Expose()
  buildId: number;
}
