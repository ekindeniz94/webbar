import { Expose, Transform, Type } from 'class-transformer';
import { IsNotEmpty, IsOptional, IsString, ValidateNested } from 'class-validator';
import { V1Secret } from '@kubernetes/client-node';
import { K8sCreateNewWorkloadRequestDto } from '../../../mo-kubernetes';

export class WorkspaceWorkloadCreateContainerImageRequestDto {
  @IsNotEmpty()
  @ValidateNested({ message: '$property must be an object' })
  @Type(() => K8sCreateNewWorkloadRequestDto)
  @Expose()
  resource: K8sCreateNewWorkloadRequestDto;

  @IsNotEmpty()
  @IsString()
  @Expose()
  name: string;

  @IsOptional()
  @IsString()
  @Expose()
  registryAuthUrl: string;

  @IsOptional()
  @IsString()
  @Expose()
  registryUrl: string;

  @IsOptional()
  @IsString()
  @Expose()
  registryUser: string;

  @IsOptional()
  @IsString()
  @Expose()
  registryPat: string;

  @IsOptional()
  @Expose()
  imagePullSecretResource?: V1Secret;

  @IsOptional()
  @IsString()
  @Expose()
  imagePullSecretResourceJson?: string;

  @IsOptional()
  @IsString()
  @Transform(({ value, obj }: { value: string; obj: WorkspaceWorkloadCreateContainerImageRequestDto }) => {
    if (!value) {
      if (obj.imagePullSecretResource) {
        return obj.imagePullSecretResource.metadata?.name;
      }
      if (obj.imagePullSecretResourceJson) {
        return `img-pull-sec-${obj.name}`;
      }
    }
    return undefined;
  })
  @Expose()
  imagePullSecretResourceName?: string;
}
