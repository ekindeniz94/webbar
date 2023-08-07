import { Expose, Transform, Type } from 'class-transformer';
import { ProductStateEnum, ProductTypeEnum } from '../../enums';
import { ProductBulletPointDto } from './product-bullet-point.dto';
import { MoUtils } from '@mo/js-utils';
import { OrganizationNameDto } from '../organization';
import { ProjectNamespaceServiceKubernetesSettingsDto } from '../../../../mo-project-dto';
import { BaseEntityDto } from '@mo/database-dto';
import moment from 'moment/moment';

export class ProductFlatDto extends BaseEntityDto {
  @Type(() => OrganizationNameDto)
  @Expose()
  organization: OrganizationNameDto;

  @Transform(({ value }) => value ?? ProductTypeEnum.PLAN)
  @Expose()
  productType: ProductTypeEnum;

  @Transform(({ value }) => (value && value !== 'undefined' && value !== 'null' ? moment(value).toDate() : value))
  @Expose()
  startsOn: Date;

  @Transform(({ value }) => (value && value !== 'undefined' && value !== 'null' ? moment(value).toDate() : value))
  @Expose()
  endsOn: Date;

  @Expose()
  name: string;

  @Expose()
  description: string;

  @Type(() => ProductBulletPointDto)
  @Transform(({ value }) => value ?? [])
  @Expose()
  bulletPoints: ProductBulletPointDto[];

  @Expose()
  icon: string;

  @Transform(({ value }) => value ?? ProductStateEnum.ACTIVE)
  @Expose()
  state: ProductStateEnum;

  /***************************** LIMITS ********************************/

  @Type(() => ProjectNamespaceServiceKubernetesSettingsDto)
  @Expose()
  kubernetesLimits: ProjectNamespaceServiceKubernetesSettingsDto;

  @Type(() => Number)
  @Expose()
  trafficInMb: number;

  @Type(() => Number)
  @Transform(({ value }) => value ?? 0.9)
  @Expose()
  trafficWarning: number;

  @Type(() => Number)
  @Transform(({ value }) => value ?? 1.3)
  @Expose()
  trafficShutdown: number;

  @Type(() => Number)
  @Transform(({ value }) => value ?? 1)
  @Expose()
  persistentCountMax: number;

  @Type(() => Number)
  @Transform(({ value }) => value ?? 1024)
  @Expose()
  persistentDiskInMb: number;

  @Type(() => Number)
  @Transform(({ value }) => value ?? 0.9)
  @Expose()
  persistentDiskWarning: number;

  @Type(() => Number)
  @Transform(({ value }) => value ?? 1.3)
  @Expose()
  persistentDiskShutdown: number;

  @Expose()
  clusterCountMax?: number;

  @Expose()
  projectCountMax?: number;

  /****************************************************************/

  @Transform(({ value }) => MoUtils.parseBoolean(value))
  @Expose()
  enableTeamCollaboration: boolean;

  @Transform(({ value }) => MoUtils.parseBoolean(value))
  @Expose()
  enableCreateCluster: boolean;

}
