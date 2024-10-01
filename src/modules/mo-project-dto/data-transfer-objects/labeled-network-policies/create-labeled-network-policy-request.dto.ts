import { Expose, Transform } from 'class-transformer';
import { IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { K8sLabeledNetworkPolicy } from './labeled-network-policies.dto';
import { K8sResourceNamespaceDto } from 'src/mo-core-base';

export class CreateExternalSecretStoreRequestDto {
  @IsNotEmpty()
  @Expose()
  namespace: K8sResourceNamespaceDto;
  k8sLabeledNetworkPolicy: K8sLabeledNetworkPolicy[];
}
