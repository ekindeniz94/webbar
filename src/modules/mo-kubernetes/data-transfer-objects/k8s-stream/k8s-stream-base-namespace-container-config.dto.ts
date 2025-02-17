import { Expose } from 'class-transformer';
import { IsNotEmpty, IsString } from 'class-validator';
import { K8sStreamBaseConfigDto } from './k8s-stream-base-config.dto';

export abstract class K8sStreamBaseNamespaceContainerConfigDto extends K8sStreamBaseConfigDto {
  @IsNotEmpty()
  @IsString()
  @Expose()
  namespace: string;

  @IsNotEmpty()
  @IsString()
  @Expose()
  controller: string;
}
