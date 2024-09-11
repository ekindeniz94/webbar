import { IsBoolean, IsNotEmpty, IsOptional, IsString, IsUrl } from 'class-validator';
import { Expose, Transform } from 'class-transformer';
import { TransformToBoolean } from '@mogenius/js-utils';

export class ClusterHelmRepoAddRequestDto {
  @IsNotEmpty()
  @IsString()
  @Expose()
  name: string;

  @IsNotEmpty()
  @IsUrl({
    require_host: true,
    require_protocol: true,
    require_tld: true
  })
  @IsString()
  @Expose()
  url: string;

  @IsOptional()
  @Transform(({ value }) => value ?? '')
  @IsString()
  @Expose()
  username?: string;

  @IsOptional()
  @Transform(({ value }) => value ?? '')
  @IsString()
  @Expose()
  password?: string;

  @IsOptional()
  @TransformToBoolean(false)
  @IsBoolean()
  @Expose()
  insecureSkipTLSverify?: boolean;

  @IsOptional()
  @TransformToBoolean(false)
  @IsBoolean()
  @Expose()
  passCredentialsAll?: boolean;
}
