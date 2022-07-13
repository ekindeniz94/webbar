import { CloudflareCustomHostnameStatusEnum } from '../enums';
import { Expose } from 'class-transformer';

export class CloudflareCustomHostnameResponseDto {
  @Expose()
  id: string;

  @Expose()
  hostname: string;

  // @Expose()
  // ssl: ICloudflareCustomHostnameDetailsSsl;

  @Expose()
  status: CloudflareCustomHostnameStatusEnum;

  // @Expose()
  // custom_origin_server: string;

  @Expose()
  created_at: string;

  @Expose()
  verification_errors: string[];

  @Expose()
  ownership_verification: {
    type: 'http' | 'txt' | 'email';
    name: string; // '_cf-custom-hostname.<DOMAIN>';
    value: string; //  '98cd7251-1cf2-4dea-a64f-c642f958792a';
  };

  @Expose()
  ownership_verification_http: {
    http_url: string; // 'http://<DOMAIN>/.well-known/cf-custom-hostname-challenge/8b4c8f24-85b9-4754-8a0f-52bb989ab94e';
    http_body: string; // '98cd7251-1cf2-4dea-a64f-c642f958792a';
  };
}
