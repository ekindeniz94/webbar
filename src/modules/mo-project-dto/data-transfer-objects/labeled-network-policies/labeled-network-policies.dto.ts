import { Expose, Type } from 'class-transformer';
import { IsNotEmpty, IsNumber, IsString, Max, Min } from 'class-validator';
import { ProjectNamespaceServicePortBindingEnum } from 'src/mo-core-base';

export class K8sLabeledPortDto {
  @Type(() => Number)
  @IsNumber()
  @Min(0)
  @Max(65535)
  @Expose()
  port: number;
  
  @IsNotEmpty()
  @IsString()
  @Expose()
  portType: ProjectNamespaceServicePortBindingEnum;
}

export class K8sLabeledNetworkPolicy{
  @IsNotEmpty()
  @IsString()
  @Expose()
  name: string;

  @IsNotEmpty()
  @IsString()
  @Expose()
  type: "egress" | "ingress";

  @IsNotEmpty()
  @IsString()
  @Expose()
  ports: K8sLabeledPortDto[];
}