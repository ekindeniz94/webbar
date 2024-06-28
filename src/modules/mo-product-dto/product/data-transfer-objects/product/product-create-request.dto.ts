import { Expose, Transform, Type } from 'class-transformer';
import {
  isArray,
  IsBoolean,
  IsEnum,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  ValidateNested
} from 'class-validator';
import moment from 'moment';
import { ProductStateEnum, ProductTypeEnum } from '../../enums';
import { IdDto } from '@mo/core-dto';
import { TransformToBoolean } from '@mo/js-utils';
import { ClusterDto } from '../cluster';
import { ProductKubernetesSettingsCreateRequestDto } from './product-kubernetes-settings-create-request.dto';

export class ProductCreateRequestDto {
  @IsOptional()
  @Type(() => ClusterDto)
  @Transform(({ value }) => (value && isArray(value) ? value : []))
  @Expose()
  clusters: IdDto[];

  @IsNotEmpty()
  @Type(() => IdDto)
  @Expose()
  organization: IdDto;

  // TODO RAUS
  // @IsOptional()
  // @Type(() => IdDto)
  // @Transform(({ value }) => (value && isArray(value) ? value : []))
  // @Expose()
  // allowedUsers: IdDto[];

  @IsEnum(ProductTypeEnum)
  @Transform(({ value }) => value ?? ProductTypeEnum.PLAN)
  @Expose()
  productType: ProductTypeEnum;

  @IsString()
  @Expose()
  name: string;

  @IsString()
  @Expose()
  description: string;

  @Transform(({ value }) => (value && value !== 'undefined' && value !== 'null' ? moment(value).toDate() : value))
  @Expose()
  startsOn: Date;

  @Transform(({ value }) => (value && value !== 'undefined' && value !== 'null' ? moment(value).toDate() : value))
  @Expose()
  endsOn: Date;

  @IsEnum(ProductStateEnum)
  @Transform(({ value }) => value ?? ProductStateEnum.ACTIVE)
  @Expose()
  state: ProductStateEnum;

  /***************************** LIMITS ********************************/

  @Type(() => ProductKubernetesSettingsCreateRequestDto)
  @ValidateNested()
  @Expose()
  kubernetesLimits: ProductKubernetesSettingsCreateRequestDto;

  // Es geht hier um die Anzahl der persistenten Volumes die erstellt werden können prüfen ob das in API verwendet wird.
  @Type(() => Number)
  @Transform(({ value }) => value ?? 1)
  @IsNumber()
  @Expose()
  persistentCountMax: number;

  @Type(() => Number)
  @Transform(({ value }) => value ?? 1024)
  @IsNumber()
  @Expose()
  persistentDiskInMb: number;

  @Type(() => Number)
  @IsOptional()
  @IsNumber()
  @Expose()
  clusterCountMax?: number;

  @Type(() => Number)
  @IsOptional()
  @IsNumber()
  @Expose()
  projectCountMax?: number;

  /****************************************************************/

  @TransformToBoolean(false)
  @IsBoolean()
  @Expose()
  enableTeamCollaboration: boolean;

  @TransformToBoolean(false)
  @IsBoolean()
  @Expose()
  enableCreateCluster: boolean;

  /***************************** CLOUDFLARE ********************************/
}
