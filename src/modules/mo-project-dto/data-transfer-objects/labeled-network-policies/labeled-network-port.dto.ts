import { Expose, Type } from 'class-transformer';
import { IsEnum, IsNotEmpty, IsNumber, Max, Min } from 'class-validator';
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
