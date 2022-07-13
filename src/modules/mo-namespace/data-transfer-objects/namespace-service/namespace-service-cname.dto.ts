import { Expose, Transform, Type } from 'class-transformer';
import { CloudflareCustomHostnameDto } from '../../../mo-cloudflare/data-transfer-objects/cloudflare-custom-hostname.dto';
import moment from 'moment';

export class NamespaceServiceCnameDto {
  @Expose()
  id: string;

  @Transform(({ value }) => (value && value !== 'undefined' && value !== 'null' ? moment(value).toDate() : value))
  @Expose()
  createdAt: string | Date;

  @Transform(({ value }) => (value && value !== 'undefined' && value !== 'null' ? moment(value).toDate() : value))
  @Expose()
  updatedAt: string | Date;

  // @Type(() => NamespaceServiceDto)
  // @Expose()
  // namespaceService: NamespaceServiceDto;

  @Expose()
  cName: string;

  @Type(() => CloudflareCustomHostnameDto)
  @Expose()
  cloudflareCustomHostname: CloudflareCustomHostnameDto;
}
