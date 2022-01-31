import { Expose, Transform, Type } from 'class-transformer';
import { isArray, IsOptional, IsString, isString } from 'class-validator';
import moment from 'moment';
import { BaseEntityDto } from '../../../../mo-core';
import {
  DiskPerformanceTierEnum,
  PaypalCategoryTypeEnum,
  PaypalProductTypeEnum,
  ProductStateEnum,
  ProductRuntimeIntervalEnum,
  ProductTypeEnum
} from '../../enums';
import { NamespaceColorEnum, NamespaceServiceKubernetesSettingsDto } from '../../../../mo-namespace';
import { PriceIntervalDto } from '../price-interval/price-interval.dto';
import { ClusterDto } from '../cluster/cluster.dto';
import { ProductBulletPointDto } from './product-bullet-point.dto';
import { UserPublicDto } from '../../../../mo-user';

export class ProductDto extends BaseEntityDto {
  @Type(() => PriceIntervalDto)
  @Transform(({ value }) => (value && isArray(value) ? value : []))
  @Expose()
  priceIntervals: PriceIntervalDto[];

  @Type(() => UserPublicDto)
  @Transform(({ value }) => (value && isArray(value) ? value : []))
  @Expose()
  allowedForUsers: UserPublicDto[];

  @Transform(({ value }) => value ?? ProductTypeEnum.PLAN)
  @Expose()
  productType: ProductTypeEnum;

  @Type(() => Boolean)
  @Expose()
  bestPrice: boolean;

  @Expose()
  bestPriceTitle: string;

  @Transform(({ value }) => value ?? null)
  @Expose()
  headerIcon: string;

  @Transform(({ value }) => value ?? null)
  @Expose()
  headerText: string;

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

  @Type(() => ClusterDto)
  @Expose()
  cluster: ClusterDto;

  @Transform(({ value }) => moment(value).toDate())
  @Expose()
  startsOn: Date;

  @Transform(({ value }) => moment(value).toDate())
  @Expose()
  endsOn: Date;

  @Transform(({ value }) => value ?? 0)
  @Type(() => Number)
  @Expose()
  order: number;

  @Transform(({ value }) => value ?? ProductStateEnum.ACTIVE)
  @Expose()
  state: ProductStateEnum;

  /****************************** PAYPAL ******************************/
  // @Transform(({ value }) => value ?? PaypalProductTypeEnum.SERVICE)
  @Expose()
  paypalProductType: PaypalProductTypeEnum | null;

  // @Transform(({ value }) => value ?? PaypalCategoryTypeEnum.SERVICES)
  @Expose()
  paypalProductCategoryType: PaypalCategoryTypeEnum | null;

  @Expose()
  paypalProductImageUrl: string;

  @Expose()
  paypalProductHomeUrl: string;

  @Transform(({ value }) => (value && isString(value) ? value : ''))
  @Expose()
  paypalProductId: string;

  @Transform(({ value }) => value ?? {})
  @Expose()
  paypalResponseData: any;
  /*********************************************************************/

  /***************************** LIMITS ********************************/
  @Type(() => NamespaceServiceKubernetesSettingsDto)
  @Expose()
  kubernetesLimits: NamespaceServiceKubernetesSettingsDto;

  @Type(() => Number)
  @Expose()
  trafficInMb: number;

  @Type(() => Number)
  @Expose()
  persistentDiskInMb: number;

  @Transform(({ value }) => value ?? DiskPerformanceTierEnum.PREMIUM_SSD_P1)
  @Expose()
  diskPerformanceTier: DiskPerformanceTierEnum;

  @Type(() => Number)
  @Expose()
  maxContainerImageSizeInMb: number;

  @Type(() => Number)
  @Expose()
  dockerImageCountMax: number;

  @Type(() => Number)
  @Expose()
  stageCountMax: number;

  @Type(() => Number)
  @Expose()
  cNamesCountMax: number;

  @Type(() => Boolean)
  @Expose()
  enableAnalytics: boolean;

  getPriceIntervalByInterval(interval: ProductRuntimeIntervalEnum) {
    return this.priceIntervals.find((item: PriceIntervalDto) => item.interval === interval);
  }
}
