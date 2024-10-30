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

  @TransformToBoolean(false)
  @Expose()
  namespaced: boolean;

  @ValidateIf((obj: K8sDescribeWorkloadRequestDto) => obj.namespaced)
  @Transform(({ value, obj }: { value: string; obj: K8sDescribeWorkloadRequestDto }) => {
    if (obj.namespaced) {
      return value;
    }
    return undefined;
  })
  @IsNotEmpty()
  @IsString()
  @Expose()
  namespace: string;

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
