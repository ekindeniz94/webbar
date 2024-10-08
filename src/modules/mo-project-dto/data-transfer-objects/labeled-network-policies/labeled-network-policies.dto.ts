import { Expose, Type } from 'class-transformer';
import { IsEnum, IsNotEmpty, IsNumber, IsString, Max, Min, ValidateNested } from 'class-validator';
import { ProjectNamespaceServicePortBindingEnum } from '../../enums';

export class K8sLabeledPortDto {
  @Type(() => Number)
  @IsNumber()
  @Min(0)
  @Max(65535)
  @Expose()
  port: number;
  
  @IsNotEmpty()
  @IsEnum(ProjectNamespaceServicePortBindingEnum)
  @Expose()
  portType: ProjectNamespaceServicePortBindingEnum;
}

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