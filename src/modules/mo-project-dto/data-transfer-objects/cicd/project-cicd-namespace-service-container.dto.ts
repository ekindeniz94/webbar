import { Expose, Transform } from 'class-transformer';
import { ContainerTypeEnum } from '../../enums';
import { BaseEntityDto } from '@mo/database-dto';
import { isArray } from 'class-validator';
import { BuildJobInfoPayloadDto, BuildStateEnum } from '../../../mo-product-dto';

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

  @Expose()
  latestBuild: BuildJobInfoPayloadDto | null;

  @Transform(({ value }) => (value && isArray(value) ? value : null))
  @Expose()
  builds: BuildJobInfoPayloadDto[] | null;

  @Expose()
  get latestBuildState(): BuildStateEnum | undefined {
    return this.latestBuild ? this.latestBuild.buildState() : undefined;
  }

  @Expose()
  get latestBuildTime(): Date | undefined {
    return this.latestBuild ? this.latestBuild.startTime : undefined;
  }
}
