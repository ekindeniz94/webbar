import { Expose, Transform, Type } from 'class-transformer';
import { ProjectNamespaceServiceStatusKindEnum, ProjectNamespaceServiceStatusKindTypeEnum } from '../../enums';
import { IsOptional } from 'class-validator';
import { ProjectNamespaceServiceStatusMessageDto } from './project-namespace-service-status-message.dto';
import { ProjectNamespaceServiceStatusTypeEnum } from '../../enums/project-namespace-service-status';
import { ProjectNamespaceServiceContainerStatusDto } from './project-namespace-service-container-status.dto';
import moment from 'moment';

export class ProjectNamespaceServiceStatusItemDto {
  @Expose()
  kind: ProjectNamespaceServiceStatusKindTypeEnum;

  @Transform(({ value }) => (value && value !== 'undefined' && value !== 'null' ? moment(value).toDate() : value))
  @Expose()
  createdAt: Date;

  @Expose()
  name: string;

  @Expose()
  namespace: string;

  @IsOptional()
  @Expose()
  ownerName: string;

  @IsOptional()
  @Expose()
  ownerKind: ProjectNamespaceServiceStatusKindTypeEnum;

  @IsOptional()
  @Expose()
  status: ProjectNamespaceServiceStatusTypeEnum;

  @IsOptional()
  @Type(() => ProjectNamespaceServiceStatusMessageDto)
  @Expose()
  messages: ProjectNamespaceServiceStatusMessageDto[];

  @IsOptional()
  @Type(() => ProjectNamespaceServiceContainerStatusDto)
  @Transform(
    ({
      value,
      obj
    }: {
      value: ProjectNamespaceServiceContainerStatusDto;
      obj: ProjectNamespaceServiceStatusItemDto;
    }) => {
      return obj.kind !== ProjectNamespaceServiceStatusKindEnum.Container ? undefined : value;
    }
  )
  @Expose()
  containerStatus?: ProjectNamespaceServiceContainerStatusDto;
}
