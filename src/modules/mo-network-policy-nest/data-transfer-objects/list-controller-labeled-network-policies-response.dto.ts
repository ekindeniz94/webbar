import { IsNotEmpty } from 'class-validator';
import { Expose, Type } from 'class-transformer';
import { K8sMessageResponseBaseDto } from '../../mo-kubernetes';
import { ListControllerLabeledNetworkPoliciesDto } from './list-controller-labeled-network-policies.dto';

export class ListControllerLabeledNetworkPoliciesResponseDto extends K8sMessageResponseBaseDto<ListControllerLabeledNetworkPoliciesDto> {
  @IsNotEmpty()
  @Type(() => ListControllerLabeledNetworkPoliciesDto)
  @Expose()
  data: ListControllerLabeledNetworkPoliciesDto;
}
