import { Expose, Transform } from 'class-transformer';
import {
  IsBoolean,
  IsDate,
  IsEnum,
  IsHexColor,
  IsNumber,
  isString,
  IsString,
  MaxLength,
  Min,
  MinLength
} from 'class-validator';
import { BaseEntityDto, DTO_VALIDATION_CONST } from '../../../mo-core';
import { NamespaceServiceKubernetesSettingsDto } from '../../../mo-namespace';
import { ProductTypeEnum } from '../../enums';

export class ProductDto extends BaseEntityDto {
  @Expose()
  id: string;

  @Expose()
  @IsString()
  @IsDate()
  createdAt: string;

  @Expose()
  @IsString()
  @IsDate()
  createdBy: string;

  @Expose()
  @IsString()
  @MaxLength(DTO_VALIDATION_CONST.SUBSCRIPTION.PRODUCT.NAME.MAX)
  @MinLength(DTO_VALIDATION_CONST.SUBSCRIPTION.PRODUCT.NAME.MIN)
  @Transform(({ value }) =>
    (value && isString(value) ? value.trim() : value)?.substring(0, DTO_VALIDATION_CONST.SUBSCRIPTION.PRODUCT.NAME.MAX)
  )
  name: string;

  @Expose()
  @IsString()
  @MaxLength(DTO_VALIDATION_CONST.SUBSCRIPTION.PRODUCT.DESCRIPTION.MAX)
  @MinLength(DTO_VALIDATION_CONST.SUBSCRIPTION.PRODUCT.DESCRIPTION.MIN)
  @Transform(({ value }) =>
    (value && isString(value) ? value.trim() : value)?.substring(
      0,
      DTO_VALIDATION_CONST.SUBSCRIPTION.PRODUCT.DESCRIPTION.MAX
    )
  )
  description: string;

  @Expose()
  @IsEnum(ProductTypeEnum)
  productType: ProductTypeEnum;

  @Expose()
  @IsString()
  @IsDate()
  startsOn: string;

  @Expose()
  @IsString()
  @IsDate()
  endsOn: string;

  @Expose()
  @IsNumber()
  pricePerMonthInCents: number;

  @Expose()
  @IsNumber()
  pricePerYearInCents: number;

  @Expose()
  @IsBoolean()
  deleted: boolean;

  @Expose()
  kubernetesLimits: NamespaceServiceKubernetesSettingsDto;

  @Expose()
  @IsNumber()
  trafficInMb: number;

//   @Expose()
//   @IsBoolean()
//   diskAllowed: boolean;

//   @Expose()
//   @IsBoolean()
//   azureFileAllowed: boolean;

  @Expose()
  @IsString()
  @MaxLength(DTO_VALIDATION_CONST.SUBSCRIPTION.PRODUCT.ICON.MAX)
  @MinLength(DTO_VALIDATION_CONST.SUBSCRIPTION.PRODUCT.ICON.MIN)
  @Transform(({ value }) =>
    (value && isString(value) ? value.trim() : value)?.substring(0, DTO_VALIDATION_CONST.SUBSCRIPTION.PRODUCT.ICON.MAX)
  )
  icon: string;

  @Expose()
  @IsHexColor()
  bgColor: string;

  get displayPriceMonth(): string {
    return `${(this.pricePerMonthInCents / 100).toFixed(2)}`;
  }

  get displayPriceYear(): string {
    return `${(this.pricePerYearInCents / 100).toFixed(2)}`;
  }
}
