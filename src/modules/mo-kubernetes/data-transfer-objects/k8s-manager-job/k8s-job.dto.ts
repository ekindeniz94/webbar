import { Expose, plainToInstance, Transform, Type } from 'class-transformer';
import { K8sJobNotificationTypeEnum, K8sJobStateEnum } from '../../enums/k8s-manager';
import moment from 'moment';
import { K8sJobCommandDto } from './k8s-job-command.dto';
import {
  IsEnum,
  IsNotEmpty,
  IsNumber,
  isNumberString,
  IsOptional,
  IsString,
  ValidateIf,
  ValidateNested
} from 'class-validator';
import {
  ProjectDisplayNameDto,
  ProjectNamespaceDisplayNameDto,
  ProjectNamespaceServiceContainerNameDto,
  ProjectNamespaceServiceDisplayNameDto
} from '../../../mo-project-dto';
import { OrganizationNameDto } from '../../../mo-product-dto/product/data-transfer-objects/organization/organization-name.dto';

export class K8sJobDto {
  @IsNotEmpty()
  @IsString()
  @Expose()
  id: string;

  @IsNotEmpty()
  @Type(() => OrganizationNameDto)
  @ValidateNested()
  @Expose()
  organization: OrganizationNameDto;

  @IsNotEmpty()
  @Type(() => ProjectDisplayNameDto)
  @ValidateNested()
  @Expose()
  project: ProjectDisplayNameDto;

  // from k8s
  @IsNotEmpty()
  @IsString()
  @Expose()
  projectId: string;

  @IsNotEmpty()
  @IsString()
  @Expose()
  clusterId: string;

  // from k8s
  @IsNotEmpty()
  // @ValidateIf((object: K8sJobDto, value) => !object.namespaceId)
  @IsString()
  @Expose()
  namespaceName: string;

  @IsNotEmpty()
  @Type(() => ProjectNamespaceDisplayNameDto)
  @ValidateNested()
  @Expose()
  namespace: ProjectNamespaceDisplayNameDto;

  // @IsOptional()
  @Transform(({ value }) => (!value ? null : plainToInstance(ProjectNamespaceServiceDisplayNameDto, value)))
  @Type(() => ProjectNamespaceServiceDisplayNameDto)
  @ValidateIf((object: K8sJobDto, value) => object.notificationType !== K8sJobNotificationTypeEnum.VOLUME)
  @IsNotEmpty()
  @ValidateNested()
  @Expose()
  service: ProjectNamespaceServiceDisplayNameDto;

  // from k8s
  // @IsOptional()
  // @ValidateIf((object: K8sJobDto, value) => !object.serviceId)
  @ValidateIf((object: K8sJobDto, value) => object.notificationType !== K8sJobNotificationTypeEnum.VOLUME)
  @IsNotEmpty()
  @IsString()
  @Expose()
  controllerName: string;

  @IsOptional()
  @Type(() => ProjectNamespaceServiceContainerNameDto)
  @ValidateNested()
  @Expose()
  container: ProjectNamespaceServiceContainerNameDto;

  // from k8s
  @IsOptional()
  // @ValidateIf((object: K8sJobDto, value) => !object.serviceId)
  @IsString()
  @Expose()
  containerName: string;

  @IsOptional()
  @IsNumber()
  @Transform(({ value }) => (isNumberString(value) ? +value : value))
  @Expose()
  buildId: number;

  @IsNotEmpty()
  @Transform(({ value }) => (value && value !== 'undefined' && value !== 'null' ? moment(value).toDate() : value))
  @Expose()
  started: Date;

  @Transform(({ value }) => (value && value !== 'undefined' && value !== 'null' ? moment(value).toDate() : value))
  @Expose()
  finished: Date;

  @IsNotEmpty()
  @IsString()
  @Expose()
  title: string;

  @IsString()
  @Transform(({ value, obj }) => (value && value !== 'undefined' && value !== 'null' ? value : obj.title))
  @Expose()
  message: string;

  @IsNotEmpty()
  @IsEnum(K8sJobStateEnum)
  @Expose()
  state: K8sJobStateEnum;

  @Type(() => K8sJobCommandDto)
  // @Transform(({ value, obj }) =>
  //   value?.filter((item: K8sJobCommandDto) => !!item.command && ALLOWED_BUILD_TASKS.includes(item.command))
  // )
  @ValidateNested({ each: true })
  @Expose()
  commands: K8sJobCommandDto[];

  @Transform(({ value, obj }) => {
    obj.started =
      obj.started && obj.started !== 'undefined' && obj.started !== 'null' ? moment(obj.started).toDate() : obj.started;
    obj.finished =
      obj.started && obj.finished && obj.finished !== 'undefined' && obj.finished !== 'null'
        ? moment(obj.finished).toDate()
        : new Date();
    return moment(obj.finished).diff(moment(obj.started), 'milliseconds');
  })
  @Expose()
  durationMs: number;

  @IsEnum(K8sJobNotificationTypeEnum)
  @Transform(({ value, obj }) => {
    if (value === 'Volume') {
      return K8sJobNotificationTypeEnum.VOLUME;
    } else if (value === 'Build') {
      return K8sJobNotificationTypeEnum.BUILD;
    } else if (value === 'Service') {
      return K8sJobNotificationTypeEnum.SERVICE;
    } else if (obj.buildId) {
      return K8sJobNotificationTypeEnum.BUILD;
    } else {
      return K8sJobNotificationTypeEnum.SERVICE;
    }
  })
  @Expose()
  notificationType: K8sJobNotificationTypeEnum;
}
