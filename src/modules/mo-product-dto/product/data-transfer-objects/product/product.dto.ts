import { Expose, Transform, Type } from 'class-transformer';
import { isArray } from 'class-validator';
import moment from 'moment';
import { ProductStateEnum, ProductTypeEnum } from '../../enums';
import { ClusterDto } from '../cluster/cluster.dto';
import { UserPublicDto } from '@mogenius/user-dto';
import { TransformToBoolean } from '@mogenius/js-utils';
import { OrganizationNameDto } from '../organization';
import { BaseEntityDto } from '@mogenius/database-dto';
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

  // @Type(() => UserPublicDto)
  // @Transform(({ value }) => (value && isArray(value) ? value : []))
  // @Expose()
  // allowedUsers: UserPublicDto[];

  @Transform(({ value }) => value ?? ProductTypeEnum.PLAN)
  @Expose()
  productType: ProductTypeEnum;

  @Expose()
  name: string;

  @Expose()
  description: string;

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
  @Transform(({ value }) => value ?? 1)
  @Expose()
  persistentCountMax: number;

  @Type(() => Number)
  @Transform(({ value }) => value ?? 1024)
  @Expose()
  persistentDiskInMb: number;

  @Transform(({ value }) => (value > 0 ? value : 0))
  @Expose()
  clusterCountMax?: number;

  @Type(() => Number)
  @Transform(({ value }) => (value > 0 ? value : 0))
  @Expose()
  projectCountMax?: number;

  @Type(() => Number)
  @Transform(({ value }) => (value > 0 ? value : 0))
  @Expose()
  workspaceCountMax: number;

  @Type(() => Number)
  @Transform(({ value }) => (value > 0 ? value : 0))
  @Expose()
  teamInviteCountMax: number;

  /****************************************************************/

  @TransformToBoolean(false)
  @Expose()
  enableSso: boolean;

  @TransformToBoolean(false)
  @Expose()
  enableTeamCollaboration: boolean;

  @TransformToBoolean(false)
  @Expose()
  enableCreateCluster: boolean;

  @TransformToBoolean(false)
  @Expose()
  enableCreateWorkspace: boolean;

  get isValid(): boolean {
    return this.state === ProductStateEnum.ACTIVE && moment().isBetween(this.startsOn, this.endsOn);
  }
}
