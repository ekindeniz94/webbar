import { Expose, Transform, Type } from 'class-transformer';
import { isArray, isBoolean, IsNumber, isString } from 'class-validator';
import moment from 'moment';
import { BaseEntityDto } from '../../../../mo-core';
import {
  DiskPerformanceTierEnum,
  PaypalCategoryTypeEnum,
  PaypalProductTypeEnum,
  ProductRuntimeIntervalEnum,
  ProductStateEnum,
  ProductTypeEnum
} from '../../enums';
import { NamespaceServiceKubernetesSettingsDto } from '../../../../mo-namespace';
import { PriceIntervalDto } from '../price-interval/price-interval.dto';
import { ClusterDto } from '../cluster/cluster.dto';
import { ProductBulletPointDto } from './product-bullet-point.dto';
import { ProductVoucherDto } from './product-voucher.dto';
import { UserPublicDto } from '@mo/user-dto';

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
  @Transform(({ value }) => (value && isArray(value) ? value : []))
  @Expose()
  clusterList: ClusterDto[];

  @Type(() => ProductVoucherDto)
  @Transform(({ value }) => (value && isArray(value) ? value : []))
  @Expose()
  productVoucherList: ProductVoucherDto;

  @Transform(({ value }) => (value && value !== 'undefined' && value !== 'null' ? moment(value).toDate() : value))
  @Expose()
  startsOn: Date;

  @Transform(({ value }) => (value && value !== 'undefined' && value !== 'null' ? moment(value).toDate() : value))
  @Expose()
  endsOn: Date;

  @Type(() => Number)
  @Transform(({ value }) => value ?? 0)
  @Type(() => Number)
  @Expose()
  order: number;

  @Type(() => Number)
  @Transform(({ value }) => value ?? 1)
  @IsNumber()
  @Expose()
  assignableCount: number;

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
  trafficWarning: number;

  @Type(() => Number)
  @Expose()
  trafficShutdown: number;

  @Type(() => Number)
  @Expose()
  persistentDiskInMb: number;

  @Type(() => Number)
  @Expose()
  persistentDiskWarning: number;

  @Type(() => Number)
  @Expose()
  persistentDiskShutdown: number;

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
  @Transform(({ value }) => (isBoolean(value) ? value : false))
  @Expose()
  skipCloudflareCustomHostnameCreation: boolean;

  @Type(() => Boolean)
  @Expose()
  enableAnalytics: boolean;

  @Type(() => Boolean)
  @Expose()
  enableSecurityLogs: boolean;

  @Type(() => Boolean)
  @Expose()
  enableTeamCollaboration: boolean;

  get isValid(): boolean {
    return this.state === ProductStateEnum.ACTIVE && moment().isBetween(this.startsOn, this.endsOn);
  }

  getPriceIntervalByInterval(interval: ProductRuntimeIntervalEnum) {
    return this.priceIntervals.find((item: PriceIntervalDto) => item.interval === interval);
  }
}
