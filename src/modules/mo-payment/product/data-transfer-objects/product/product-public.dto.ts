import { Expose, Transform, Type } from 'class-transformer';
import { isArray, IsNumber } from 'class-validator';
import moment from 'moment';
import { ProductRuntimeIntervalEnum, ProductStateEnum, ProductTypeEnum } from '../../enums';
import { NamespaceServiceKubernetesSettingsDto } from '../../../../mo-namespace';
import { ProductBulletPointDto } from './product-bullet-point.dto';
import { PriceIntervalPublicDto } from '../price-interval';

export class ProductPublicDto {
  @Expose()
  id: string;

  @Type(() => PriceIntervalPublicDto)
  @Transform(({ value }) => (value && isArray(value) ? value : []))
  @Expose()
  priceIntervals: PriceIntervalPublicDto[];

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

  // @Type(() => ClusterPublicDto)
  // @Transform(({ value }) => (value && isArray(value) ? value : []))
  // @Expose()
  // clusterList: ClusterPublicDto[];

  @Transform(({ value }) => moment(value).toDate())
  @Expose()
  startsOn: Date;

  @Transform(({ value }) => moment(value).toDate())
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
  // @Expose()
  // paypalProductType: PaypalProductTypeEnum | null;
  //
  // // @Transform(({ value }) => value ?? PaypalCategoryTypeEnum.SERVICES)
  // @Expose()
  // paypalProductCategoryType: PaypalCategoryTypeEnum | null;
  //
  // @Expose()
  // paypalProductImageUrl: string;
  //
  // @Expose()
  // paypalProductHomeUrl: string;
  //
  // @Transform(({ value }) => (value && isString(value) ? value : ''))
  // @Expose()
  // paypalProductId: string;
  //
  // @Transform(({ value }) => value ?? {})
  // @Expose()
  // paypalResponseData: any;
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

  // @Transform(({ value }) => value ?? DiskPerformanceTierEnum.PREMIUM_SSD_P1)
  // @Expose()
  // diskPerformanceTier: DiskPerformanceTierEnum;

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
    return this.priceIntervals.find((item: PriceIntervalPublicDto) => item.interval === interval);
  }
}
