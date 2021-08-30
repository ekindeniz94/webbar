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
  @IsString()
  @MaxLength(DTO_VALIDATION_CONST.PLAN.PRODUCT.NAME.MAX)
  @MinLength(DTO_VALIDATION_CONST.PLAN.PRODUCT.NAME.MIN)
  @Transform(({ value }) =>
    (value && isString(value) ? value.trim() : value)?.substring(0, DTO_VALIDATION_CONST.PLAN.PRODUCT.NAME.MAX)
  )
  name: string;

  @Expose()
  @IsString()
  @MaxLength(DTO_VALIDATION_CONST.PLAN.PRODUCT.DESCRIPTION.MAX)
  @MinLength(DTO_VALIDATION_CONST.PLAN.PRODUCT.DESCRIPTION.MIN)
  @Transform(({ value }) =>
    (value && isString(value) ? value.trim() : value)?.substring(
      0,
      DTO_VALIDATION_CONST.PLAN.PRODUCT.DESCRIPTION.MAX
    )
  )
  description: string;

  @Expose()
  @IsEnum(ProductTypeEnum)
  productType: ProductTypeEnum;

  @Expose()
  @IsEnum(PaypalProductTypeEnum)
  paypalProductType: PaypalProductTypeEnum;

  @Expose()
  @IsEnum(PaypalCategoryTypeEnum)
  paypalCategoryType: PaypalCategoryTypeEnum;

  @Expose()
  @IsEnum(ProductRuntimeIntervalEnum)
  interval: ProductRuntimeIntervalEnum;

  // NEEDED FOR PAYPAL
  @Expose()
  @IsString()
  imageUrl: string;

  // NEEDED FOR PAYPAL
  @Expose()
  @IsString()
  homeUrl: string;

  @Expose()
  @IsString()
  @IsDateString()
  startsOn: string;

  @Expose()
  @IsString()
  @IsDateString()
  endsOn: string;

  @Expose()
  @IsNumber()
  pricePerMonthInCents: number;

  @Expose()
  @IsBoolean()
  deleted: boolean;

  @Expose()
  kubernetesLimits: NamespaceServiceKubernetesSettingsDto;

  @Expose()
  @IsNumber()
  trafficInMb: number;

  @Expose()
  @IsNumber()
  persistentDiskInMb: number;

  @Expose()
  @IsNumber()
  persistentAzureFilesInMb: number;

  @Expose()
  @IsString()
  @MaxLength(DTO_VALIDATION_CONST.PLAN.PRODUCT.ICON.MAX)
  @MinLength(DTO_VALIDATION_CONST.PLAN.PRODUCT.ICON.MIN)
  icon: string;

  @Expose()
  @IsHexColor()
  bgColor: string;

  get displayPriceMonth(): string {
    return `${(this.pricePerMonthInCents / 100).toFixed(2)}`;
  }
}
function PlanCycleEnum(PlanCycleEnum: any) {
  throw new Error('Function not implemented.');
}
