import { Expose } from 'class-transformer';

export abstract class K8sMessageResponseBaseDto<T = any> {
  @Expose()
  status: 'success' | 'error';

  @Expose()
  message?: string;

  @Expose()
  abstract data?: T;
}
