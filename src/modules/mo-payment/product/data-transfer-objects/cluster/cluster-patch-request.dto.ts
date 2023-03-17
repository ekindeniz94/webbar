import { ClusterCreateRequestDto } from './cluster-create-request.dto';
import {
  isArray,
  IsBoolean,
  isIP,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  IsUUID,
  Matches,
  MaxLength,
  MinLength
} from 'class-validator';
import { Expose, plainToInstance, Transform, Type } from 'class-transformer';
import { MoUtils } from '@mo/js-utils';
import { CountryDto } from '../../../../mo-core';
import _ from 'lodash';
import { ClusterSetupDto } from './cluster-setup.dto';

export class ClusterPatchRequestDto extends ClusterCreateRequestDto {
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

  @IsOptional()
  @IsString()
  @Expose()
  host: string;

  @IsOptional()
  @IsString()
  @Expose()
  spectrumSubDomain: string;

  @IsOptional()
  @IsBoolean()
  @Expose()
  cloudflareProxied: boolean;

  @Type(() => Number)
  @IsOptional()
  @IsNumber()
  @Expose()
  namespaceMaxCount: number;

  @IsOptional()
  @IsString()
  @Expose()
  description: string;

  @IsOptional()
  @IsString()
  @Expose()
  clusterMfaId: string;

  @Transform(({ value }) => MoUtils.parseBoolean(value))
  @IsOptional()
  @IsBoolean()
  @Expose()
  apiKeyIsActive: boolean;

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
