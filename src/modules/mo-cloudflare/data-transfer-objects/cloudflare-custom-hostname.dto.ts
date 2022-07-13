import { Expose, Transform, Type } from 'class-transformer';
import { isArray, IsEnum, IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { MoUtils } from '../../../utils';
import { CloudflareCustomHostnameStatusEnum } from '../enums';
import { NamespaceServiceCnameDto } from '../../mo-namespace/data-transfer-objects/namespace-service/namespace-service-cname.dto';
import moment from 'moment';
import { ICloudflareCustomHostnameDetailsSsl } from '../interfaces';
import { CloudflareCustomHostnameResponseDto } from './cloudflare-custom-hostname-response.dto';

export class CloudflareCustomHostnameDto {
  @Type(() => NamespaceServiceCnameDto)
  @Transform(({ value }) => (value && isArray(value) ? value : []))
  @Expose()
  namespaceServiceCNames: NamespaceServiceCnameDto[];

  @Expose()
  id: string;

  @Expose()
  customHostnameId: string;

  @Expose()
  hostname: string;

  @Transform(({ value }) => value ?? CloudflareCustomHostnameStatusEnum.PENDING)
  @Expose()
  status: CloudflareCustomHostnameStatusEnum;

  @Transform(({ value }) => value ?? null)
  @Type(() => CloudflareCustomHostnameResponseDto)
  @Expose()
  cloudflareResponse: CloudflareCustomHostnameResponseDto | null;

  @Transform(({ value }) => (value && value !== 'undefined' && value !== 'null' ? moment(value).toDate() : value))
  @Expose()
  createdAt: Date;

  @Transform(({ value }) => (value && value !== 'undefined' && value !== 'null' ? moment(value).toDate() : value))
  @Expose()
  updatedAt: Date;
}
