import { Expose } from 'class-transformer';

export class K8sNewWorkloadDto {
  @Expose()
  name: string;

  @Expose()
  yamlString: string;

  @Expose()
  description: string;
}
