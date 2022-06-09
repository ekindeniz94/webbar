import { Expose, Transform, Type } from 'class-transformer';
import {
  ArrayMinSize,
  ArrayNotEmpty,
  isArray,
  IsBoolean,
  IsEnum,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  IsUrl,
  ValidateNested
} from 'class-validator';
import moment from 'moment';
import {
  DiskPerformanceTierEnum,
  PaypalCategoryTypeEnum,
  PaypalProductTypeEnum,
  ProductStateEnum,
  ProductTypeEnum
} from '../../enums';
import { NamespaceServiceKubernetesSettingsCreateRequestDto } from '../../../../mo-namespace';
import { ClusterDto } from '../cluster/cluster.dto';
import { PriceIntervalCreateRequestDto } from '../price-interval';
import { ProductBulletPointDto } from './product-bullet-point.dto';
import { UserPublicDto } from '../../../../mo-user';
import { ProductVoucherDto } from './product-voucher.dto';

export class ProductCreateRequestDto {
  @IsNotEmpty()
  @Type(() => PriceIntervalCreateRequestDto)
  @Transform(({ value }) => (value && isArray(value) ? value : []))
  @ArrayNotEmpty()
  @ArrayMinSize(1)
  @ValidateNested()
  @Expose()
  priceIntervals: PriceIntervalCreateRequestDto[];

  @IsNotEmpty()
  @Type(() => ClusterDto)
  @Transform(({ value }) => (value && isArray(value) ? value : []))
  @ArrayNotEmpty()
  @ArrayMinSize(1)
  @Expose()
  clusterList: ClusterDto[];

  @Type(() => ProductVoucherDto)
  @Transform(({ value }) => (value && isArray(value) ? value : []))
  @Expose()
  productVoucherList: ProductVoucherDto;

  @IsOptional()
  @Type(() => UserPublicDto)
  @Transform(({ value }) => (value && isArray(value) ? value : []))
  @Expose()
  allowedForUsers: UserPublicDto[];

  @Transform(({ value }) => value ?? ProductTypeEnum.PLAN)
  @IsEnum(ProductTypeEnum)
  @Expose()
  productType: ProductTypeEnum;

  @Type(() => Boolean)
  @Transform(({ value }) => value ?? false)
  @IsOptional()
  @IsBoolean()
  @Expose()
  bestPrice: boolean;

  @Transform(({ value }) => value ?? null)
  @IsOptional()
  @IsString()
  @Expose()
  bestPriceTitle: string;

  @Transform(({ value }) => value ?? null)
  @IsOptional()
  @IsString()
  @Expose()
  headerIcon: string;

  @Transform(({ value }) => value ?? null)
  @IsOptional()
  @IsString()
  @Expose()
  headerText: string;

  @IsString()
  @Expose()
  name: string;

  @IsString()
  @Expose()
  description: string;

  @Type(() => ProductBulletPointDto)
  @Transform(({ value }) => value ?? [])
  @Expose()
  bulletPoints: ProductBulletPointDto[];

  @IsString()
  @Expose()
  icon: string;

  @Transform(({ value }) => (value ? moment(value).toDate() : value))
  @Expose()
  startsOn: Date;

  @Transform(({ value }) => (value ? moment(value).toDate() : value))
  @Expose()
  endsOn: Date;

  @Type(() => Number)
  @Transform(({ value }) => value ?? 0)
  @Type(() => Number)
  @IsNumber()
  @Expose()
  order: number;

  @Type(() => Number)
  @Transform(({ value }) => value ?? 1)
  @IsNumber()
  @Expose()
  assignableCount: number;

  @Transform(({ value }) => value ?? ProductStateEnum.ACTIVE)
  @IsEnum(ProductStateEnum)
  @Expose()
  state: ProductStateEnum;

  /****************************** PAYPAL ******************************/
  @IsOptional()
  @IsEnum(PaypalProductTypeEnum)
  // @Transform(({ value }) => value ?? PaypalProductTypeEnum.SERVICE)
  @Expose()
  paypalProductType: PaypalProductTypeEnum;

  @IsOptional()
  @IsEnum(PaypalCategoryTypeEnum)
  // @Transform(({ value }) => value ?? PaypalCategoryTypeEnum.SERVICES)
  @Expose()
  paypalProductCategoryType: PaypalCategoryTypeEnum;

  @IsUrl({ require_protocol: true })
  @Expose()
  paypalProductImageUrl: string;

  @IsUrl({ require_protocol: true })
  @Expose()
  paypalProductHomeUrl: string;

  // @Transform(({ value }) => (value && isString(value) ? value : ''))
  // @IsString()
  // @Expose()
  // paypalProductId: string;

  // @Transform(({ value }) => value ?? {})
  // @IsOptional()
  // @Expose()
  // paypalResponseData: any;
  /*********************************************************************/

  /***************************** LIMITS ********************************/
  @Type(() => NamespaceServiceKubernetesSettingsCreateRequestDto)
  @ValidateNested()
  @Expose()
  kubernetesLimits: NamespaceServiceKubernetesSettingsCreateRequestDto;

  @Type(() => Number)
  @IsNumber()
  @Expose()
  trafficInMb: number;

  @Type(() => Number)
  @IsNumber()
  @Expose()
  trafficWarning: number;

  @Type(() => Number)
  @IsNumber()
  @Expose()
  trafficShutdown: number;

  @Type(() => Number)
  @IsNumber()
  @Expose()
  persistentDiskInMb: number;

  @Type(() => Number)
  @IsNumber()
  @Expose()
  persistentDiskWarning: number;

  @Type(() => Number)
  @IsNumber()
  @Expose()
  persistentDiskShutdown: number;

  @IsEnum(DiskPerformanceTierEnum)
  @Transform(({ value }) => value ?? DiskPerformanceTierEnum.PREMIUM_SSD_P1)
  @Expose()
  diskPerformanceTier: DiskPerformanceTierEnum;

  @Type(() => Number)
  @IsNumber()
  @Expose()
  maxContainerImageSizeInMb: number;

  @Type(() => Number)
  @IsNumber()
  @Expose()
  dockerImageCountMax: number;

  @Type(() => Number)
  @IsNumber()
  @Expose()
  stageCountMax: number;

  @Type(() => Number)
  @IsNumber()
  @Expose()
  cNamesCountMax: number;

  @Type(() => Boolean)
  @IsBoolean()
  @Expose()
  enableAnalytics: boolean;
}
