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
  @Expose()
  country: CountryDto;

  @IsOptional()
  @Expose()
  region: string;

  @IsNotEmpty()
  @IsString()
  @Expose()
  displayName: string;

  @IsNotEmpty()
  @IsString()
  @MinLength(3)
  @MaxLength(64)
  @Matches(/^([a-z])([a-z0-9-_])/, {
    message: '$property must conform to: a-z, 0-9, - ;min 3, max 64 char'
  })
  @Transform(({ value }) => {
    if (!value) {
      return 'mogenius';
    }
    return value
      ?.toLowerCase()
      .replace(/[^a-z0-9-]/g, '-')
      ?.replace(/ +/g, '')
      ?.substring(0, 64)
      .split('-')
      .filter((item: string) => item && item.length > 0)
      .join('-');
  })
  @Expose()
  name: string;

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
  clusterId: string;

  @Transform(({ value }) => MoUtils.parseBoolean(value))
  @IsOptional()
  @IsBoolean()
  @Expose()
  apiKeyIsActive: boolean;

  @Type(() => ClusterSetupDto)
  @Transform(({ value }) => plainToInstance(ClusterSetupDto, value, { excludeExtraneousValues: true }))
  @Expose()
  clusterSetup: string[];
}
