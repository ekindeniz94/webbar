import { Expose } from 'class-transformer';

export class NamespaceKeypairDto {
  @Expose()
  publicKey: string;
}
