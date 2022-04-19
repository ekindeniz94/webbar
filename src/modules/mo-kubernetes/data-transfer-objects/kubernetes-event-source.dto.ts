import { Expose } from 'class-transformer';

export class KubernetesEventSourceDto {
  @Expose()
  component: string;

  @Expose()
  host: string;
}
