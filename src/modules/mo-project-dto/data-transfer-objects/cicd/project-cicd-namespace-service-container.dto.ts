import { BaseEntityDto } from '@mo/database-dto';
import { Expose, Transform, Type } from 'class-transformer';
import { isArray } from 'class-validator';
import { ContainerTypeEnum } from '../../enums';
import { BuildJobInfoPayloadDto } from '../../../mo-kubernetes/data-transfer-objects/k8s-manager-build-job/build-job-info-payload.dto';
import { K8sBuildStateEnum } from '../../../mo-kubernetes/enums/k8s-manager/k8s-build-state.enum';

export class ProjectCiCdNamespaceServiceContainerDto extends BaseEntityDto {
  @Expose()
  displayName: string;

  @Expose()
  name: string;

  @Expose()
  type: ContainerTypeEnum;

  @Expose()
  gitRepository: string;

  @Expose()
  gitBranch: string;

  @Type(() => BuildJobInfoPayloadDto)
  @Expose()
  latestBuild: BuildJobInfoPayloadDto | null;

  @Transform(({ value }) => (value && isArray(value) ? value : null))
  @Type(() => BuildJobInfoPayloadDto)
  @Expose()
  builds: BuildJobInfoPayloadDto[] | null;

  @Expose()
  get latestBuildState(): K8sBuildStateEnum | undefined {
    return this.latestBuild ? this.latestBuild.buildState() : undefined;
  }

  @Expose()
  get latestBuildTime(): Date | undefined {
    return this.latestBuild ? this.latestBuild.startTime : undefined;
  }
}
