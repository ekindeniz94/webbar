import { Expose } from "class-transformer";
import { IsNotEmpty } from "class-validator";
import { K8sLabeledNetworkPolicy } from "./labeled-network-policies.dto";


export class LabeledNetworkPolicyPortsListResponseDto {
  @Expose()
  @IsNotEmpty()
  K8sLabeledNetworkPolicy: K8sLabeledNetworkPolicy[];
}