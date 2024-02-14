import { Expose, Transform, Type } from 'class-transformer';
import { isNumberString, isString } from 'class-validator';
import { BaseEntityDto } from '@mo/database-dto';
import { ProjectNamespaceServiceDeploymentStrategyEnum } from '../../enums';

export class ProjectNamespaceServiceFlatDto extends BaseEntityDto {
  @Transform(({ value, obj }) => (value && isString(value) && value.length > 0 ? value : obj.name))
  @Expose()
  displayName: string;

  @Expose()
  description: string;

  @Type(() => Number)
  @Transform(({ value }) => (isNumberString(value) ? +value : value))
  @Expose()
  replicaCount: number;

  @Transform(({ value }) => value ?? ProjectNamespaceServiceDeploymentStrategyEnum.RECREATE)
  @Expose()
  deploymentStrategy: ProjectNamespaceServiceDeploymentStrategyEnum;
}
