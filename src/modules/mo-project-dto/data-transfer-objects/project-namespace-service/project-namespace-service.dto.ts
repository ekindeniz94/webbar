import { Expose, Transform, Type } from 'class-transformer';
import {
  IsArray,
  isArray,
  IsNumber,
  isNumberString,
  IsOptional,
  IsString,
  isString,
  ValidateNested
} from 'class-validator';
import { BaseEntityDto } from '@mo/database-dto';
import { ProjectNamespaceServiceDeploymentStrategyEnum, ServiceControllerEnum } from '../../enums';
import { UserPublicDto } from '@mo/user-dto';
import { ProjectNamespaceServiceAppDto } from '../project-namespace-service-app';
import { ProjectNamespaceServiceContainerDto } from '../project-namespace-service-container/project-namespace-service-container.dto';
import { IdDto } from '@mo/core-dto';
import { CronjobSettingsDto } from './cronjob-settings.dto';
import { TrafficDto } from '../stats';

export class ProjectNamespaceServiceDto extends BaseEntityDto {
  @Type(() => UserPublicDto)
  @Expose()
  createdBy: UserPublicDto;

  @Type(() => IdDto)
  @Expose()
  projectNamespace: IdDto;

  @Transform(({ value, obj }) => (value && isString(value) && value.length > 0 ? value : obj.name))
  @Expose()
  displayName: string;

  @Expose()
  controller: ServiceControllerEnum;

  @Expose()
  controllerName: string;

  @Expose()
  description: string;

  @Type(() => ProjectNamespaceServiceAppDto)
  @Expose()
  app: ProjectNamespaceServiceAppDto;

  @Type(() => ProjectNamespaceServiceContainerDto)
  @Transform(({ value }) => (value && isArray(value) ? value : []))
  @Expose()
  containers: ProjectNamespaceServiceContainerDto[];

  @Type(() => Number)
  @Transform(({ value }) => (isNumberString(value) ? +value : value))
  @Expose()
  replicaCount: number;

  @Transform(({ value }) => value ?? ProjectNamespaceServiceDeploymentStrategyEnum.RECREATE)
  @Expose()
  deploymentStrategy: ProjectNamespaceServiceDeploymentStrategyEnum;

  @Type(() => CronjobSettingsDto)
  @IsOptional()
  @Expose()
  cronJobSettings?: CronjobSettingsDto;

  @Type(() => HpaSettingsDto)
  @IsOptional()
  @Expose()
  hpaSettings?: HpaSettingsDto;

  @Type(() => TrafficDto)
  @Expose()
  traffic: TrafficDto;
}

export class HpaSettingsDto {
  @Type(() => CrossVersionObjectReference)
  @Expose()
  @IsOptional()
  ScaleTargetRef: CrossVersionObjectReference;

  @Expose()
  @IsNumber()
  minReplicas: number;

  @Expose()
  @IsNumber()
  maxReplicas: number;

  @Type(() => MetricSpec)
  @Expose()
  @IsArray()
  metrics: MetricSpec[];
}

export class CrossVersionObjectReference {
  @Expose()
  @IsString()
  kind: string;

  @Expose()
  @IsString()
  name: string;

  @Expose()
  @IsString()
  @IsOptional()
  apiVersion: string;
}

export class MetricSpec {
  @Expose()
  type: MetricSourceTypeEnum;

  @Type(() => PodsMetricSource)
  @IsOptional()
  @Expose()
  pods: PodsMetricSource;

  @Type(() => ResourceMetricSource)
  @IsOptional()
  @Expose()
  resource: ResourceMetricSource;
}

export class ResourceMetricSource {
  @IsString()
  @Expose()
  name: string;

  @Type(() => MetricTarget)
  @Expose()
  target: MetricTarget;
}

export class PodsMetricSource {
  @Type(() => MetricIdentifier)
  @Expose()
  metric: MetricIdentifier;

  @Type(() => MetricTarget)
  @Expose()
  target: MetricTarget;
}

export class MetricIdentifier {
  @Expose()
  @IsString()
  name: string;

  @Expose()
  @IsString()
  @IsOptional()
  selector: string;
}

export class MetricTarget {
  @Expose()
  Type: MetricTargetTypeEnum;

  @Expose()
  @IsString()
  @IsOptional()
  Value: string;

  @Expose()
  @IsString()
  @IsOptional()
  AverageValue: string;

  @Expose()
  @IsString()
  @IsOptional()
  AverageUtilization: number;
}

export enum MetricTargetTypeEnum {
  UtilizationMetricType = 'Utilization',
  ValueMetricType = 'Value',
  AverageValueMetricType = 'AverageValue'
}

export enum MetricSourceTypeEnum {
  ObjectMetricSourceType = 'Object',
  PodsMetricSourceType = 'Pods',
  ResourceMetricSourceType = 'Resource',
  ContainerResourceMetricSourceType = 'ContainerResource',
  ExternalMetricSourceType = 'External'
}
