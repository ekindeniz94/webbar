import { Expose, Type } from 'class-transformer';

export class NamespaceServiceCnameDto {
  @Expose()
  id: string;

  @Type(() => Number)
  @Expose()
  internalPort: number;

  @Expose()
  cName: string;

  @Expose()
  cloudflareResponse: any;
}
