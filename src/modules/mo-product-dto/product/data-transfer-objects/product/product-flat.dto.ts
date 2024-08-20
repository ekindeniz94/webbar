import { Expose, Transform, Type } from 'class-transformer';
import { ProductStateEnum, ProductTypeEnum } from '../../enums';
import { TransformToBoolean } from '@mogenius/js-utils';
import { OrganizationNameDto } from '../organization';
import { BaseEntityDto } from '@mogenius/database-dto';
import moment from 'moment';
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

  @Transform(({ value }) => (value > 0 ? value : 0))
  @Expose()
  clusterCountMax?: number;

  @Transform(({ value }) => (value > 0 ? value : 0))
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
