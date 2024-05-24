import { isArray, IsBoolean, IsEnum, isIP, IsNotEmpty, IsNumber, IsOptional, IsString, IsUUID } from 'class-validator';
import { Expose, plainToInstance, Transform, Type } from 'class-transformer';
import { IsSemanticVersion, MoUtils } from '@mo/js-utils';
import _ from 'lodash';
import { CountryDto } from '@mo/database-dto';
import { ClusterAdminCreateRequestDto } from './cluster-admin-create-request.dto';
import { OrganizationNameDto } from '../../organization';
import { ClusterBuildServerTypeEnum, ClusterProviderEnum, ClusterTypeEnum } from '../../../enums';
import { ClusterSetupDto } from '../cluster-setup.dto';

export class ClusterAdminPatchRequestDto extends ClusterAdminCreateRequestDto {
  @IsNotEmpty()
  @IsString()
  @IsUUID()
  @Expose()
  id: string;

  @Type(() => CountryDto)
  @IsOptional()
  @Transform(({ value }) => (value?.code ? value : undefined))
  @Expose()
  country: CountryDto;

  @Type(() => OrganizationNameDto)
  @Expose()
  organization: OrganizationNameDto;

  @IsEnum(ClusterTypeEnum)
  @Transform(({ value }) => value ?? ClusterTypeEnum.BRING_YOUR_OWN)
  @Expose()
  type: ClusterTypeEnum;

  @IsEnum(ClusterProviderEnum)
  @Transform(({ value }) => value ?? ClusterProviderEnum.UNKNOWN)
  @Expose()
  provider: ClusterProviderEnum;

  @Transform(({ value }) => value ?? ClusterBuildServerTypeEnum.IN_CLUSTER)
  @Expose()
  buildServerType: ClusterBuildServerTypeEnum;

  @IsOptional()
  @Expose()
  region: string;

  @Transform(({ value }) =>
    _.uniq((value && isArray(value) ? value : []) as string[]).filter((item: string) => isIP(item))
  )
  @IsOptional()
  @Expose()
  loadbalancerIps: string[];

  @IsOptional()
  @IsString()
  @Expose()
  loadbalancerHost: string;

  // @IsOptional()
  // @IsString()
  // @Expose()
  // host: string;

  // @IsOptional()
  // @IsString()
  // @Expose()
  // spectrumSubDomain: string;

  // @IsOptional()
  // @IsBoolean()
  // @Expose()
  // cloudflareProxied: boolean;

  @Type(() => Number)
  @IsOptional()
  @IsNumber()
  @Expose()
  projectCountMax: number;

  @IsOptional()
  @IsString()
  @Expose()
  description: string;

  @IsOptional()
  @IsString()
  @Expose()
  icon: string;

  @IsOptional()
  @IsString()
  @Expose()
  image: string;

  @IsOptional()
  @IsString()
  @Expose()
  clusterMfaId: string;

  @Transform(({ value }) => MoUtils.parseBoolean(value))
  @IsOptional()
  @IsBoolean()
  @Expose()
  apiKeyIsActive: boolean;

  @IsOptional()
  @IsString()
  @IsSemanticVersion()
  @Expose()
  appVersion: string;

  @Type(() => ClusterSetupDto)
  @Transform(({ value }) => plainToInstance(ClusterSetupDto, value, { excludeExtraneousValues: true }))
  @Expose()
  clusterSetup: ClusterSetupDto;

  @IsNotEmpty()
  @IsString()
  @Expose()
  containerRegistryUrl: string;

  @IsNotEmpty()
  @Transform(({ value }) => MoUtils.removeLastSlashes(value))
  @IsString()
  @Expose()
  containerRegistryPath: string;

  @IsOptional()
  @IsString()
  @Expose()
  containerRegistryUser: string;

  @IsOptional()
  @IsString()
  @Expose()
  containerRegistryPat: string;
}
