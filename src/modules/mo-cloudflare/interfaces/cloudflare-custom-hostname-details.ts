import { ICloudflareCustomHostnameDetailsSsl } from './cloudflare-custom-hostname-details-ssl';
import { CloudflareCustomHostnameStatusEnum } from '../enums';

export interface ICloudflareCustomHostnameDetails {
  id: string;
  hostname: string;
  ssl: ICloudflareCustomHostnameDetailsSsl;
  status: CloudflareCustomHostnameStatusEnum;
  custom_origin_server: string;
  created_at: string;

  verification_errors: string[];
  ownership_verification: {
    type: 'http' | 'txt' | 'email';
    name: string; // '_cf-custom-hostname.<DOMAIN>';
    value: string; //  '98cd7251-1cf2-4dea-a64f-c642f958792a';
  };
  ownership_verification_http: {
    http_url: string; // 'http://<DOMAIN>/.well-known/cf-custom-hostname-challenge/8b4c8f24-85b9-4754-8a0f-52bb989ab94e';
    http_body: string; // '98cd7251-1cf2-4dea-a64f-c642f958792a';
  };
}
