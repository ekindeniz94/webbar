import { Expose, Type } from 'class-transformer';

export class NamespaceServiceCnameDto {
  @Type(() => Number)
  @Expose()
  internalPort: number;

  @Expose()
  cName: string;

  @Expose()
  cloudflareResponse: any;
}
