import { Expose, Type } from 'class-transformer';
import { IsNotEmpty, IsOptional, IsString, ValidateNested } from 'class-validator';
import { K8sResourceEntryDto } from '../../../mo-kubernetes';

export class WorkspaceWorkloadResourceStatusRequestDto {
  @IsNotEmpty()
  @IsString({ each: true })
  @Expose()
  resourceNames: string[];

  @IsNotEmpty()
  @IsString({ each: true })
  @Expose()
  namespaces: string[];

  @IsNotEmpty()
  @ValidateNested({ message: '$property must be an object' })
  @Type(() => K8sResourceEntryDto)
  @Expose()
  resourceEntity: K8sResourceEntryDto;
}
