import { Expose, Type } from 'class-transformer';
import { IsDate, IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { ProjectNamespaceServiceListCronjobJobsItemStatusMessageDto } from './project-namespace-service-list-cronjob-jobs-item-status-message.dto';

export class ProjectNamespaceServiceListCronjobJobsItemDto {
  @IsDate()
  @IsNotEmpty()
  @Expose()
  schedule: Date;

  @IsString()
  @IsNotEmpty()
  @Expose()
  status: 'Active' | 'Succeeded' | 'Failed' | 'Suspended' | 'Unknown';

  @IsString()
  @Type(() => String)
  @Expose()
  tileType: 'Job' | 'CronJob';

  @IsOptional()
  @IsString()
  @Type(() => String)
  @Expose()
  jobName?: string;

  @IsOptional()
  @IsString()
  @Type(() => String)
  @Expose()
  podName?: string;

  @IsOptional()
  @IsString()
  @Type(() => String)
  @Expose()
  durationInSec?: string;

  @IsOptional()
  @Type(() => ProjectNamespaceServiceListCronjobJobsItemStatusMessageDto)
  @Expose()
  message?: ProjectNamespaceServiceListCronjobJobsItemStatusMessageDto;
}
