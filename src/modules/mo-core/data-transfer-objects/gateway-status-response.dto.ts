import { Expose } from 'class-transformer';

export class GatewayStatusResponseDto {
  @Expose()
  version: string;

  @Expose()
  serviceName: string;

  @Expose()
  author: string;

  @Expose()
  company: string;

  @Expose()
  company_homepage: string;
}
