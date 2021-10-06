import { Expose, Transform, Type } from 'class-transformer';
import {
  IsDateString,
  IsEnum, IsNumber,
  isString,
  IsString,
  MaxLength,
  MinLength,
  ValidateNested
} from 'class-validator';
import moment from 'moment';
import { DTO_VALIDATION_CONST } from '../../../mo-core';
import { NamespaceServiceDeploymentStrategyEnum, NamespaceServiceKubernetesSettingsDto } from '../../../mo-namespace';
import { DiskPerformanceTierEnum, ProductTypeEnum } from '../../enums';
import { CurrencyDto } from '../currency';

export class ProductCreateRequestDto {
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
    (value && isString(value) ? value.trim() : value)?.substring(0, DTO_VALIDATION_CONST.PLAN.PRODUCT.DESCRIPTION.MAX)
  )
  description: string;

  @Expose()
  @IsEnum(ProductTypeEnum)
  @Transform(({ value }) => value ?? ProductTypeEnum.STANDALONE)
  productType: ProductTypeEnum;

  @Expose()
  @IsDateString()
  @Transform(
    ({ value, obj }) => {
      if (value) {
        return value;
      }
      obj.startsOn = moment().format();
      return obj.startsOn;
    },
    { toClassOnly: true }
  )
  startsOn: string;

  @Expose()
  @IsDateString()
  @Transform(
    ({ value, obj }) => {
      if (value) {
        return value;
      }
      obj.endsOn = moment().add(100, 'years').format();
      return obj.endsOn;
    },
    { toClassOnly: true }
  )
  endsOn: string;

  @Expose()
  @Type(() => CurrencyDto)
  @ValidateNested()
  currencies: CurrencyDto[];

  @Expose()
  @Transform(
    ({ value, obj }) => {
      if (value) {
        return value;
      }
      const defaultLimit = new NamespaceServiceKubernetesSettingsDto();
      defaultLimit.deploymentStrategy = NamespaceServiceDeploymentStrategyEnum.RECREATE;
      defaultLimit.limitCpuCores = 0.1;
      defaultLimit.limitMemoryMB = 128;
      defaultLimit.replicaCount = 1;
      defaultLimit.replicaCountMax = 1;
      defaultLimit.ephemeralStorageMB = 200;
      obj.kubernetesLimits = defaultLimit;
      return obj.kubernetesLimits;
    },
    { toClassOnly: true }
  )
  kubernetesLimits: NamespaceServiceKubernetesSettingsDto;

  @Expose()
  @IsNumber()
  @Transform(
    ({ value, obj }) => {
      if (value) {
        return value;
      }
      obj.trafficInMb = 1000;
      return obj.trafficInMb;
    },
    { toClassOnly: true }
  )
  trafficInMb: number;

  @Expose()
  @IsNumber()
  @Transform(
    ({ value, obj }) => {
      if (value) {
        return value;
      }
      obj.persistentDiskInMb = 0;
      return obj.persistentDiskInMb;
    },
    { toClassOnly: true }
  )
  persistentDiskInMb: number;

  @Expose()
  @IsEnum(DiskPerformanceTierEnum)
  @Transform(({ value }) => value ?? DiskPerformanceTierEnum.PREMIUM_SSD_P1)
  diskPerformanceTier: DiskPerformanceTierEnum;

  @Expose()
  @IsNumber()
  @Transform(
    ({ value, obj }) => {
      if (value) {
        return value;
      }
      obj.persistentAzureFilesInMb = 0;
      return obj.persistentAzureFilesInMb;
    },
    { toClassOnly: true }
  )
  persistentAzureFilesInMb: number;

  @Expose()
  @IsString()
  @MaxLength(DTO_VALIDATION_CONST.PLAN.PRODUCT.ICON.MAX)
  @MinLength(DTO_VALIDATION_CONST.PLAN.PRODUCT.ICON.MIN)
  @Transform(
    ({ value, obj }) => {
      if (value) {
        return value;
      }
      obj.icon = 'product_icon_placeholder.jpeg';
      return obj.icon;
    },
    { toClassOnly: true }
  )
  icon: string;

  @Expose()
  @IsString()
  @Transform(
    ({ value, obj }) => {
      if (value) {
        return value;
      }
      obj.bgColor = 'Color0';
      return obj.bgColor;
    },
    { toClassOnly: true }
  )
  bgColor: string;
}
