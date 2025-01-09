import { Expose, Type } from "class-transformer";
import { IsNotEmpty, IsOptional, IsString, ValidateNested } from "class-validator";
import { K8sResourceEntryDto } from './k8s-resource-entry.dto';

export class K8sGetNamespaceWorkloadListRequestDto {
  @IsNotEmpty()
  @IsString()
  @Expose()
  namespace: string;

  @IsOptional()
  @Type(() => K8sResourceEntryDto)
  @ValidateNested({ each: true, message: '$property must be an array' })
  @Expose()
  ignoreResources?: K8sResourceEntryDto[];
}
