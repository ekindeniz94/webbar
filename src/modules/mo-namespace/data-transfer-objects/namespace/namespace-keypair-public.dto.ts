import { Expose } from 'class-transformer';

export class NamespaceKeypairPublicDto {
  @Expose()
  publicKey: string;
}
