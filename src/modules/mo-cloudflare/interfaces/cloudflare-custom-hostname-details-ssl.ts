import { ICloudflareCustomHostnameDetailsSslSettings } from './cloudflare-custom-hostname-details-ssl-settings';
import { ICloudflareCustomHostnameDetailsSslCertificate } from './cloudflare-custom-hostname-details-ssl-certificate';
import { ICloudflareCustomHostnameDetailsSslValidationRecord } from './cloudflare-custom-hostname-details-ssl-validation-record';

export interface ICloudflareCustomHostnameDetailsSsl {
  id: string;
  type: 'dv';
  method: 'http' | 'txt' | 'email';
  status: string; // pending_validation
  hosts: string[];
  bundle_method: 'ubiquitous' | 'optimal' | 'force';
  wildcard: boolean;
  certificate_authority: string;
  settings: ICloudflareCustomHostnameDetailsSslSettings;
  certificates: ICloudflareCustomHostnameDetailsSslCertificate[];

  http_url: string; // 'http://<DOMAIN>/.well-known/pki-validation/ca3-1234567890123456712345e29da81cc6.txt';
  http_body: string; // 'ca3-1234567890123456712345e29da81cc6';
  validation_records: ICloudflareCustomHostnameDetailsSslValidationRecord[];
}
