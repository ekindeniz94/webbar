import { Expose, Transform, Type } from 'class-transformer';
import { IsDateString, IsEnum, IsNotEmpty, IsNumber, isString, IsString, IsUrl, MaxLength, MinLength } from 'class-validator';
import moment from 'moment';
import { DTO_VALIDATION_CONST } from '../../../mo-core';
import { NamespaceServiceDeploymentStrategyEnum, NamespaceServiceKubernetesSettingsDto } from '../../../mo-namespace';
import { NamespaceColorEnum } from '../../../mo-namespace/enums/namespace-color.enum';
import {
  DiskPerformanceTierEnum,
  PaypalCategoryTypeEnum,
  PaypalProductTypeEnum,
  ProductRuntimeIntervalEnum,
  ProductTypeEnum
} from '../../enums';
import { ClusterDto } from './cluster/cluster.dto';

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
  @IsString()
  @IsUrl()
  imageUrl: string;

  @Expose()
  @IsString()
  @IsUrl()
  homeUrl: string;

  @Expose()
  @IsEnum(ProductTypeEnum)
  @Transform(({ value }) => value ?? ProductTypeEnum.STANDALONE)
  productType: ProductTypeEnum;

  @Expose()
  @IsEnum(PaypalProductTypeEnum)
  @Transform(({ value }) => value ?? PaypalProductTypeEnum.SERVICE)
  paypalProductType: PaypalProductTypeEnum;

  @Expose()
  @IsEnum(PaypalCategoryTypeEnum)
  @Transform(({ value }) => value ?? PaypalCategoryTypeEnum.SERVICES)
  paypalCategoryType: PaypalCategoryTypeEnum;

  @Expose()
  @IsEnum(ProductRuntimeIntervalEnum)
  @Transform(({ value }) => value ?? ProductRuntimeIntervalEnum.MONTH)
  interval: ProductRuntimeIntervalEnum;

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
      obj.maxContainerImageSizeMb = 256;
      return obj.maxContainerImageSizeMb;
    },
    { toClassOnly: true }
  )
  maxContainerImageSizeMb: number;

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
  @IsEnum(NamespaceColorEnum)
  @Transform(({ value }) => value ?? NamespaceColorEnum.COLOR1)
  bgColor: NamespaceColorEnum;

  @IsNotEmpty()
  @Type(() => ClusterDto)
  @Expose()
  cluster: ClusterDto;


  @Expose()
  @IsNumber()
  @Transform(
    ({ value, obj }) => {
      if (value) {
        return value;
      }
      obj.dockerImageCountMax = 2;
      return obj.dockerImageCountMax;
    },
    { toClassOnly: true }
  )
  dockerImageCountMax: number;
}
