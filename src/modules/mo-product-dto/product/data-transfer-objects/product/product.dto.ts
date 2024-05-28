import { Expose, Transform, Type } from 'class-transformer';
import { isArray } from 'class-validator';
import moment from 'moment';
import { ProductStateEnum, ProductTypeEnum } from '../../enums';
import { ClusterDto } from '../cluster/cluster.dto';
import { ProductBulletPointDto } from './product-bullet-point.dto';
import { UserPublicDto } from '@mo/user-dto';
import { TransformToBoolean } from '@mo/js-utils';
import { OrganizationNameDto } from '../organization';
import { BaseEntityDto } from '@mo/database-dto';
import { ProductKubernetesSettingsDto } from './product-kubernetes-settings.dto';

export class ProductDto extends BaseEntityDto {
  @Type(() => ClusterDto)
  @Transform(({ value }) => (value && isArray(value) ? value : []))
  @Expose()
  clusters: ClusterDto[];

  @Type(() => OrganizationNameDto)
  @Expose()
  organization: OrganizationNameDto;

  @Type(() => UserPublicDto)
  @Expose()
  createdBy: UserPublicDto;

  @Type(() => UserPublicDto)
  @Transform(({ value }) => (value && isArray(value) ? value : []))
  @Expose()
  allowedUsers: UserPublicDto[];

  @Transform(({ value }) => value ?? ProductTypeEnum.PLAN)
  @Expose()
  productType: ProductTypeEnum;

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

  @Transform(({ value }) => (value && value !== 'undefined' && value !== 'null' ? moment(value).toDate() : value))
  @Expose()
  startsOn: Date;

  @Transform(({ value }) => (value && value !== 'undefined' && value !== 'null' ? moment(value).toDate() : value))
  @Expose()
  endsOn: Date;

  @Transform(({ value }) => value ?? ProductStateEnum.ACTIVE)
  @Expose()
  state: ProductStateEnum;

  /***************************** LIMITS ********************************/

  @Type(() => ProductKubernetesSettingsDto)
  @Expose()
  kubernetesLimits: ProductKubernetesSettingsDto;

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

  @TransformToBoolean(false)
  @Expose()
  enableTeamCollaboration: boolean;

  @TransformToBoolean(false)
  @Expose()
  enableCreateCluster: boolean;

  get isValid(): boolean {
    return this.state === ProductStateEnum.ACTIVE && moment().isBetween(this.startsOn, this.endsOn);
  }
}
