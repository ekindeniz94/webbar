import { Expose } from 'class-transformer';

export class NamespaceStageEntityDto {
  @Expose()
  id: string;

  @Expose()
  name: string;

  @Expose()
  branch: string;
}
