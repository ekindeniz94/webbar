import { Expose } from 'class-transformer';

export class K8sMessageResponseDto {
  @Expose()
  status: 'success' | 'error';

  @Expose()
  errorMessage?: string;

  @Expose()
  message?: string;
}
