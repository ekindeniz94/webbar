import { ClusterCreateRequestDto } from './cluster-create-request.dto';
import { isArray, IsBoolean, IsEnum, isIP, IsNotEmpty, IsNumber, IsOptional, IsString, IsUUID } from 'class-validator';
import { Expose, plainToInstance, Transform, Type } from 'class-transformer';
import { MoUtils, TransformToBoolean } from '@mo/js-utils';
import _ from 'lodash';
// import { ClusterSetupDto } from './cluster-setup.dto';
import { CountryDto } from '@mo/database-dto';
import { ClusterBuildServerTypeEnum, ClusterProviderEnum } from '../../enums';

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

  @IsEnum(ClusterProviderEnum)
  @Transform(({ value }) => value ?? ClusterProviderEnum.UNKNOWN)
  @Expose()
  provider: ClusterProviderEnum;

  // @Transform(({ value }) => value ?? ClusterBuildServerTypeEnum.IN_CLUSTER)
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

  @IsOptional()
  @IsString()
  @Expose()
  host: string;

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

  @TransformToBoolean(false)
  @IsOptional()
  @IsBoolean()
  @Expose()
  apiKeyIsActive: boolean;

  // Check für raus
  // @Type(() => ClusterSetupDto)
  // @Transform(({ value }) => plainToInstance(ClusterSetupDto, value, { excludeExtraneousValues: true }))
  // @Expose()
  // clusterSetup: ClusterSetupDto;

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

  // @IsOptional()
  // @Type(() => ProductDto)
  // @Exclude()
  // product: ProductDto;
}
