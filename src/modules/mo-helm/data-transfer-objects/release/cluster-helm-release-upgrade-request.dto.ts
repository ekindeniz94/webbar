import { IsBoolean, IsNotEmpty, isObject, IsOptional, IsString } from 'class-validator';
import { Expose, Transform } from 'class-transformer';
import * as JSYAML from 'js-yaml';

export class ClusterHelmReleaseUpgradeRequestDto {
  @IsNotEmpty()
  @IsString()
  @Expose()
  namespace: string;

  @IsNotEmpty()
  @IsString()
  @Expose()
  chart: string;

  @IsNotEmpty()
  @IsString()
  @Expose()
  release: string;

  @IsOptional()
  @IsString()
  @Expose()
  version: string;

  @IsOptional()
  @Transform(({ value }) => {
    if (value && isObject(value)) {
      value = JSYAML.dump(value);
    }
    return value;
  })
  @IsString()
  @Expose()
  values: string;

  @IsOptional()
  @IsBoolean()
  @Expose()
  dryRun: boolean;
}
