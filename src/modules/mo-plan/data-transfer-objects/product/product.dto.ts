import { Expose } from 'class-transformer';
import { BaseEntityDto } from '../../../mo-core';
import { NamespaceServiceKubernetesSettingsDto } from '../../../mo-namespace';
import { ProductRuntimeIntervalEnum, ProductTypeEnum } from '../../enums';
import { DiskPerformanceTierEnum } from '../../enums/disk-performance-tier.enum';
import { PaypalCategoryTypeEnum } from '../../enums/paypal-category-type.enum';
import { PaypalProductTypeEnum } from '../../enums/paypal-product-type.enum';
import { PaypalProductData } from '../../utils';
import { PlanDto } from '../plan';
import { ClusterDto } from './cluster.dto';

export class ProductDto extends BaseEntityDto {
  @Expose()
  paypalId: string;

  @Expose()
  plans: PlanDto[];

  @Expose()
  name: string;

  @Expose()
  description: string;

  @Expose()
  productType: ProductTypeEnum;

  @Expose()
  paypalProductType: PaypalProductTypeEnum;

  @Expose()
  paypalCategoryType: PaypalCategoryTypeEnum;

  @Expose()
  interval: ProductRuntimeIntervalEnum;

  // NEEDED FOR PAYPAL
  @Expose()
  imageUrl: string;

  // NEEDED FOR PAYPAL
  @Expose()
  homeUrl: string;

  @Expose()
  startsOn: Date;

  @Expose()
  endsOn: Date;

  @Expose()
  kubernetesLimits: NamespaceServiceKubernetesSettingsDto;

  @Expose()
  trafficInMb: number;

  @Expose()
  persistentDiskInMb: number;

  @Expose()
  diskPerformanceTier: DiskPerformanceTierEnum;

  @Expose()
  persistentAzureFilesInMb: number;

  @Expose()
  icon: string;

  @Expose()
  bgColor: string;

  @Expose()
  cluster: ClusterDto;

  get paypalProductData(): PaypalProductData {
    return PaypalProductData.fromProduct(this);
  }
}
