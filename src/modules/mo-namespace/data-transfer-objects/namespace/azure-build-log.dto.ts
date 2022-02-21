import { Expose } from 'class-transformer';

export class NamespaceAzureBuildLogDto {
  @Expose()
  count: number;

  @Expose()
  value: string[];
}
