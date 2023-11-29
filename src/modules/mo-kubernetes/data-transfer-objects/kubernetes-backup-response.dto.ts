import { Expose } from 'class-transformer';

export class NamespaceBackupResponse {
  @Expose()
  namespaceName: string;

  @Expose()
  data: string;

  @Expose()
  messages: string[];
}
