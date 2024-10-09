import { Expose, Type } from 'class-transformer';
import { IsNotEmpty, IsString, ValidateNested } from 'class-validator';
import { K8sLabeledPortDto } from './labeled-network-port.dto';
export class K8sLabeledNetworkPolicyDto{
  @IsNotEmpty()
  @IsString()
  @Expose()
  name: string;

  @IsNotEmpty()
  @IsString()
  @Expose()
  type: "egress" | "ingress";

  @IsNotEmpty()
  @ValidateNested({ each: true, message: '$property must be an array' })
  @Expose()
  ports: K8sLabeledPortDto[];
}