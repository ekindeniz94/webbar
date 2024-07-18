import { Expose, Type } from 'class-transformer';
import { IsArray, IsNotEmpty, IsString } from 'class-validator';
import { ProjectNamespaceServiceListCronjobJobsItemDto } from './project-namespace-service-list-cronjob-jobs-item.dto';

export class ProjectNamespaceServiceListCronjobJobsDto {
  @IsNotEmpty()
  @IsString()
  @Type(() => String)
  @Expose()
  controllerName: string;

  @IsNotEmpty()
  @IsString()
  @Type(() => String)
  @Expose()
  namespaceName: string;

  @IsNotEmpty()
  @IsString()
  @Type(() => String)
  @Expose()
  projectId: string;

  @IsNotEmpty()
  @IsArray({ each: true })
  @Expose()
  jobsInfo: ProjectNamespaceServiceListCronjobJobsItemDto[];
}
