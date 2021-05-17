import { Expose, Transform } from 'class-transformer';

export class NamespacePublicDto {
  @Expose()
  id: string;

  @Expose()
  name: string;
}
