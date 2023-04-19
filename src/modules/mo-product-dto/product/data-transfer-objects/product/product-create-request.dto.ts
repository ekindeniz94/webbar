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
import { ProductBulletPointDto } from './product-bullet-point.dto';
import { IdDto } from '@mo/core-dto';
import { MoUtils } from '@mo/js-utils';
import { ClusterDto } from '../cluster';
import { ProjectNamespaceServiceKubernetesSettingsCreateRequestDto } from '../../../../mo-project-dto';

export class ProductCreateRequestDto {
  @IsOptional()
  @Type(() => ClusterDto)
  @Transform(({ value }) => (value && isArray(value) ? value : []))
  @Expose()
  clusters: IdDto[];

  @IsOptional()
  @Type(() => IdDto)
  @Expose()
  organization: IdDto;

  @IsOptional()
  @Type(() => IdDto)
  @Transform(({ value }) => (value && isArray(value) ? value : []))
  @Expose()
  allowedUsers: IdDto[];

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

  @Type(() => ProductBulletPointDto)
  @Transform(({ value }) => value ?? [])
  @ValidateNested()
  @Expose()
  bulletPoints: ProductBulletPointDto[];

  @IsOptional()
  @IsString()
  @Expose()
  icon: string;

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

  @Type(() => ProjectNamespaceServiceKubernetesSettingsCreateRequestDto)
  @ValidateNested()
  @Expose()
  kubernetesLimits: ProjectNamespaceServiceKubernetesSettingsCreateRequestDto;

  @Type(() => Number)
  @IsNumber()
  @Expose()
  trafficInMb: number;

  @Type(() => Number)
  @Transform(({ value }) => value ?? 0.9)
  @IsNumber()
  @Expose()
  trafficWarning: number;

  @Type(() => Number)
  @Transform(({ value }) => value ?? 1.3)
  @IsNumber()
  @Expose()
  trafficShutdown: number;

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
  @Transform(({ value }) => value ?? 0.9)
  @IsNumber()
  @Expose()
  persistentDiskWarning: number;

  @Type(() => Number)
  @Transform(({ value }) => value ?? 1.3)
  @IsNumber()
  @Expose()
  persistentDiskShutdown: number;

  @Type(() => Number)
  @IsNumber()
  @Expose()
  maxContainerImageSizeInMb: number;

  @Type(() => Number)
  @IsNumber()
  @Expose()
  dockerImageCountMax: number;

  /****************************************************************/

  @Transform(({ value }) => MoUtils.parseBoolean(value))
  @IsBoolean()
  @Expose()
  enableTeamCollaboration: boolean;

  /***************************** CLOUDFLARE ********************************/

  @Transform(({ value }) => MoUtils.parseBoolean(value))
  @IsNotEmpty()
  @IsBoolean()
  @Expose()
  enableCloudflare: boolean;

  @Type(() => Number)
  @IsNumber()
  @Expose()
  cNamesCountMax: number;

  @Transform(({ value }) => MoUtils.parseBoolean(value))
  @IsBoolean()
  @Expose()
  enableAnalytics: boolean;
}
