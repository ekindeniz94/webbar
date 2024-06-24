import { Expose, Transform, Type } from 'class-transformer';
import { ProductStateEnum, ProductTypeEnum } from '../../enums';
import { TransformToBoolean } from '@mo/js-utils';
import { OrganizationNameDto } from '../organization';
import { BaseEntityDto } from '@mo/database-dto';
import moment from 'moment/moment';
import { ProductKubernetesSettingsDto } from './product-kubernetes-settings.dto';

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
}
