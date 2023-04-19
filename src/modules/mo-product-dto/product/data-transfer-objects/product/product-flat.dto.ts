import { Expose, Transform, Type } from 'class-transformer';
import { BaseEntityDto } from '../../../../mo-core';
import { ProductStateEnum, ProductTypeEnum } from '../../enums';
import { ProductBulletPointDto } from './product-bullet-point.dto';
import { MoUtils } from '@mo/js-utils';
import { OrganizationNameDto } from '../organization';
import { ProjectNamespaceServiceKubernetesSettingsDto } from '../../../../mo-project-dto';

export class ProductFlatDto extends BaseEntityDto {
  @Type(() => OrganizationNameDto)
  @Expose()
  organization: OrganizationNameDto;

  @Transform(({ value }) => value ?? ProductTypeEnum.PLAN)
  @Expose()
  productType: ProductTypeEnum;

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

  @Transform(({ value }) => value ?? ProductStateEnum.ACTIVE)
  @Expose()
  state: ProductStateEnum;

  /***************************** LIMITS ********************************/

  @Type(() => ProjectNamespaceServiceKubernetesSettingsDto)
  @Expose()
  kubernetesLimits: ProjectNamespaceServiceKubernetesSettingsDto;

  @Type(() => Number)
  @Expose()
  trafficInMb: number;

  @Type(() => Number)
  @Transform(({ value }) => value ?? 0.9)
  @Expose()
  trafficWarning: number;

  @Type(() => Number)
  @Transform(({ value }) => value ?? 1.3)
  @Expose()
  trafficShutdown: number;

  @Type(() => Number)
  @Transform(({ value }) => value ?? 1)
  @Expose()
  persistentCountMax: number;

  @Type(() => Number)
  @Transform(({ value }) => value ?? 1024)
  @Expose()
  persistentDiskInMb: number;

  @Type(() => Number)
  @Transform(({ value }) => value ?? 0.9)
  @Expose()
  persistentDiskWarning: number;

  @Type(() => Number)
  @Transform(({ value }) => value ?? 1.3)
  @Expose()
  persistentDiskShutdown: number;

  @Type(() => Number)
  @Expose()
  maxContainerImageSizeInMb: number;

  @Type(() => Number)
  @Expose()
  dockerImageCountMax: number;

  /****************************************************************/

  @Transform(({ value }) => MoUtils.parseBoolean(value))
  @Expose()
  enableTeamCollaboration: boolean;

  /***************************** CLOUDFLARE ********************************/

  @Transform(({ value }) => MoUtils.parseBoolean(value))
  @Expose()
  enableCloudflare: boolean;

  @Type(() => Number)
  @Expose()
  cNamesCountMax: number;

  @Transform(({ value }) => MoUtils.parseBoolean(value))
  @Expose()
  enableAnalytics: boolean;
}
