import { Expose } from 'class-transformer';

export class NamespaceCommandRequestDto {
  @Expose()
  id: string;
}
