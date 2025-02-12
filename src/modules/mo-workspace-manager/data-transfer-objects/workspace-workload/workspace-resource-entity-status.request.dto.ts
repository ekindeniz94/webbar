import { Expose, Type } from 'class-transformer';
import { IsBoolean, IsNotEmpty, IsOptional, ValidateNested } from 'class-validator';
import { K8sResourceEntryDto } from '../../../mo-kubernetes';

export class WorkspaceResourceEntityStatusRequestDto {
  @IsNotEmpty()
  @ValidateNested({ message: '$property must be an object' })
  @Type(() => K8sResourceEntryDto)
  @Expose()
  resourceEntity: K8sResourceEntryDto;

  @IsOptional()
  @IsBoolean()
  @Expose()
  ignoreDependentResources?: boolean;
}
