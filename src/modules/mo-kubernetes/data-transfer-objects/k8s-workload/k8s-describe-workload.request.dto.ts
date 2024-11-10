import { Expose, Transform } from 'class-transformer';
import { IsNotEmpty, IsOptional, IsString, ValidateIf } from 'class-validator';
import { TransformToBoolean } from '@mogenius/js-utils';

export class K8sDescribeWorkloadRequestDto {
  @IsNotEmpty()
  @IsString()
  @Expose()
  kind: string;

  @IsNotEmpty()
  @IsString()
  @Expose()
  name: string;

  @Transform(({ value }: { value: string }) => {
    if (value === null || value === undefined || value === 'null' || value === 'undefined') {
      return undefined;
    }
    return value;
  })
  @IsOptional()
  @Expose()
  namespace?: string | undefined | null;

  @IsNotEmpty()
  @IsString()
  @Expose()
  resourceName: string;

  @IsOptional()
  @IsString()
  @Expose()
  group?: string;

  @IsOptional()
  @IsString()
  @Expose()
  version?: string;
}
