import { Expose, Type } from 'class-transformer';
import { IsBoolean, IsNotEmpty, IsOptional, IsString, ValidateNested } from 'class-validator';
import { K8sResourceEntryDto } from './k8s-resource-entry.dto';

export class GetWorkloadStatusHelmReleaseNameRequest {
  @IsNotEmpty()
  @IsString()
  @Expose()
  release: string;

  @IsNotEmpty()
  @IsString()
  @Expose()
  namespace: string;
}

export class K8sGetWorkloadStatusRequestDto {
  @IsOptional()
  @ValidateNested({ message: '$property must be an object' })
  @Type(() => K8sResourceEntryDto)
  @Expose()
  resourceEntity?: K8sResourceEntryDto;

  @IsOptional()
  @IsString({ each: true })
  @Expose()
  namespaces?: string[];

  @IsOptional()
  @IsString({ each: true })
  @Expose()
  resourceNames?: string[];

  @IsOptional()
  @ValidateNested({ message: '$property must be an array' })
  @Type(() => GetWorkloadStatusHelmReleaseNameRequest)
  @Expose()
  helmReleases?: GetWorkloadStatusHelmReleaseNameRequest[];

  @IsOptional()
  @IsBoolean()
  @Expose()
  ignoreDependentResources?: boolean;
}
