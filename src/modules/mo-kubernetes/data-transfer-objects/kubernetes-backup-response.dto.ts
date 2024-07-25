import { Expose } from 'class-transformer';

export class KubernetesBackupResponseDto {
  @Expose()
  namespaceName: string;

  @Expose()
  data: string;

  @Expose()
  messages: string[];
}
