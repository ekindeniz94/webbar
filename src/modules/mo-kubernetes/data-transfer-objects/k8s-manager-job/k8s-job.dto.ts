import { Expose, Transform, Type } from 'class-transformer';
import { K8sJobStateEnum } from '../../enums/k8s-manager';
import moment from 'moment/moment';
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
import { GitConnectionTypeEnum } from '../../../mo-git';

export class K8sJobDto {
  @IsNotEmpty()
  @IsString()
  @Expose()
  id: string;

  @IsNotEmpty()
  @IsString()
  @Expose()
  projectId: string;

  @IsNotEmpty()
  @ValidateIf((object: K8sJobDto, value) => !object.namespaceId)
  @IsString()
  @Expose()
  namespace: string;

  @IsNotEmpty()
  @ValidateIf((object: K8sJobDto, value) => !object.namespace)
  @IsString()
  @Expose()
  namespaceId: string;

  @IsNotEmpty()
  @ValidateIf((object: K8sJobDto, value) => !object.serviceId)
  @IsString()
  @Expose()
  controllerName: string;

  @IsNotEmpty()
  @ValidateIf((object: K8sJobDto, value) => !object.controllerName)
  @IsString()
  @Expose()
  serviceId: string;

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
  @ValidateNested({ each: true })
  @Expose()
  commands: K8sJobCommandDto[];

  @Transform(({ value, obj }) => {
    obj.started =
      obj.started && obj.started !== 'undefined' && obj.started !== 'null' ? moment(obj.started).toDate() : obj.started;
    obj.finished =
      obj.started && obj.finished !== 'undefined' && obj.finished !== 'null'
        ? moment(obj.finished).toDate()
        : obj.finished;
    return moment(obj.finished).diff(moment(obj.started), 'milliseconds');
  })
  @Expose()
  durationMs: number;
}
