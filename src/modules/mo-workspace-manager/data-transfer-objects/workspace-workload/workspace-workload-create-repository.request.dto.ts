import { Expose, Type } from 'class-transformer';
import { IsNotEmpty, IsString, ValidateNested } from 'class-validator';
import { K8sResourceEntryDto } from '../../../mo-kubernetes/data-transfer-objects/k8s-workload/k8s-resource-entry.dto';

export class WorkspaceWorkloadCreateRepositoryRequestDto {
  @IsNotEmpty()
  @ValidateNested({ message: '$property must be an object' })
  @Type(() => K8sResourceEntryDto)
  @Expose()
  resource: K8sResourceEntryDto;

  @IsNotEmpty()
  @IsString()
  @Expose()
  gitRepository: string;

  @IsNotEmpty()
  @IsString()
  @Expose()
  gitBranch: string;

  @IsNotEmpty()
  @IsString()
  @Expose()
  name: string;

  @IsNotEmpty()
  @IsString()
  @Expose()
  namespace: string;

  @IsNotEmpty()
  @IsString()
  @Expose()
  dockerfileName: string;

  @IsNotEmpty()
  @IsString()
  @Expose()
  dockerContext: string;

  @IsNotEmpty()
  @IsString()
  @Expose()
  apiKey: string;

  @IsNotEmpty()
  @IsString()
  @Expose()
  registryAuthUrl: string;

  @IsNotEmpty()
  @IsString()
  @Expose()
  registryUrl: string;

  @IsNotEmpty()
  @IsString()
  @Expose()
  registryUser: string;

  @IsNotEmpty()
  @IsString()
  @Expose()
  registryPat: string;

  @IsNotEmpty()
  @IsString()
  @Expose()
  containerPullSecret: string;
}
