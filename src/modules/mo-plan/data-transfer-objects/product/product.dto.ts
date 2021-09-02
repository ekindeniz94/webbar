import { Expose, Transform } from 'class-transformer';
import {
  IsBoolean,
  IsDateString,
  IsEnum,
  IsHexColor,
  IsNumber,
  isString,
  IsString,
  MaxLength,
  MinLength
} from 'class-validator';
import { BaseEntityDto, DTO_VALIDATION_CONST } from '../../../mo-core';
import { NamespaceServiceKubernetesSettingsDto } from '../../../mo-namespace';
import { ProductRuntimeIntervalEnum, ProductTypeEnum } from '../../enums';
import { PaypalCategoryTypeEnum } from '../../enums/paypal-category-type.enum';
import { PaypalProductTypeEnum } from '../../enums/paypal-product-type.enum';

export class ProductDto extends BaseEntityDto {
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
  startsOn: string;

  @Expose()
  endsOn: string;

  @Expose()
  pricePerMonthInCents: number;

  @Expose()
  deleted: boolean;

  @Expose()
  kubernetesLimits: NamespaceServiceKubernetesSettingsDto;

  @Expose()
  trafficInMb: number;

  @Expose()
  persistentDiskInMb: number;

  @Expose()
  persistentAzureFilesInMb: number;

  @Expose()
  icon: string;

  @Expose()
  bgColor: string;

  get displayPriceMonth(): string {
    return `${(this.pricePerMonthInCents / 100).toFixed(2)}`;
  }
}
function PlanCycleEnum(PlanCycleEnum: any) {
  throw new Error('Function not implemented.');
}
