import { Expose, Transform, Type } from 'class-transformer';
import { IsDate, IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';
import { ProjectNamespaceServiceListCronjobJobsItemStatusMessageDto } from './project-namespace-service-list-cronjob-jobs-item-status-message.dto';
import moment from 'moment';
import {
  ProjectNamespaceServiceListCronjobJobStatusEnum,
  ProjectNamespaceServiceListCronjobJobTileStatusEnum
} from 'src/mo-core-base';

export class ProjectNamespaceServiceListCronjobJobsItemDto {
  @IsNotEmpty()
  @Transform(({ value }) => (value && value !== 'undefined' && value !== 'null' ? moment(value).toDate() : value))
  @IsDate()
  @Type(() => Date)
  @Expose()
  schedule: Date;

  @IsNotEmpty()
  @Expose()
  status: ProjectNamespaceServiceListCronjobJobStatusEnum;

  @IsNotEmpty()
  @Expose()
  tileType: ProjectNamespaceServiceListCronjobJobTileStatusEnum;

  @IsOptional()
  @IsString()
  @Type(() => String)
  @Expose()
  jobId?: string;

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
  @IsNumber()
  @Type(() => Number)
  @Expose()
  durationInMs?: number;

  @IsOptional()
  @Type(() => ProjectNamespaceServiceListCronjobJobsItemStatusMessageDto)
  @Expose()
  message?: ProjectNamespaceServiceListCronjobJobsItemStatusMessageDto;
}
