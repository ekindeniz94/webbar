import { Expose, Type } from 'class-transformer';
import { IsNotEmpty, IsOptional, IsString, ValidateNested } from 'class-validator';
import { K8sResourceEntryDto } from './k8s-resource-entry.dto';

export class K8sGetLabeledWorkloadListRequestDto {
  @IsNotEmpty()
  @IsString()
  @Expose()
  label: string;

  @IsOptional()
  @Type(() => K8sResourceEntryDto)
  @ValidateNested({ each: true, message: '$property must be an array' })
  @Expose()
  whitelist?: K8sResourceEntryDto[];

  @IsOptional()
  @Type(() => K8sResourceEntryDto)
  @ValidateNested({ each: true, message: '$property must be an array' })
  @Expose()
  blacklist?: K8sResourceEntryDto[];
}
