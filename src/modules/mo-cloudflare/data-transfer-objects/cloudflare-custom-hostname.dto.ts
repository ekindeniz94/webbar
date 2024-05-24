// import { Expose, Transform, Type } from 'class-transformer';
// import { isArray } from 'class-validator';
// import { CloudflareCustomHostnameStatusEnum, CloudflareSslStatusEnum } from '../enums';
// import moment from 'moment';
// import { CloudflareCustomHostnameResponseDto } from './cloudflare-custom-hostname-response.dto';
// import { ProjectNamespaceServiceCnameDto } from '../../mo-project-dto';
//
// export class CloudflareCustomHostnameDto {
//   @Type(() => ProjectNamespaceServiceCnameDto)
//   @Transform(({ value }) => (value && isArray(value) ? value : []))
//   @Expose()
//   namespaceServiceCNames: ProjectNamespaceServiceCnameDto[];
//
//   @Expose()
//   id: string;
//
//   @Expose()
//   customHostnameId: string;
//
//   @Expose()
//   hostname: string;
//
//   @Transform(({ value }) => value ?? CloudflareCustomHostnameStatusEnum.PENDING)
//   @Expose()
//   status: CloudflareCustomHostnameStatusEnum;
//
//   @Transform(({ value }) => value ?? CloudflareSslStatusEnum.PENDING_DEPLOYMENT)
//   @Expose()
//   sslStatus: CloudflareSslStatusEnum;
//
//   @Transform(({ value }) => value ?? null)
//   @Type(() => CloudflareCustomHostnameResponseDto)
//   @Expose()
//   cloudflareResponse: CloudflareCustomHostnameResponseDto | null;
//
//   @Transform(({ value }) => (value && value !== 'undefined' && value !== 'null' ? moment(value).toDate() : value))
//   @Expose()
//   createdAt: Date;
//
//   @Transform(({ value }) => (value && value !== 'undefined' && value !== 'null' ? moment(value).toDate() : value))
//   @Expose()
//   updatedAt: Date;
// }
