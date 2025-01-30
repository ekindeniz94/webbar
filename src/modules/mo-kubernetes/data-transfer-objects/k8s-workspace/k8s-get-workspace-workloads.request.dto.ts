import { Expose, Type } from 'class-transformer';
import { IsArray, ValidateNested, IsString, IsOptional } from 'class-validator';
import { K8sResourceEntryDto } from '../k8s-workload';

export class K8sGetWorkspaceWorkloadsRequestDto {
  @IsOptional()
  @IsString({ each: true })
  @Expose()
  namespaceWhitelist?: string[];

  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true, message: '$property must be an array' })
  @Type(() => K8sResourceEntryDto)
  @Expose()
  resourceWhitelist?: K8sResourceEntryDto[];
}
