export interface ICloudflareCustomHostnameDetailsSslValidationRecord {
  status: string; //'pending';
  http_url: string; // 'http://<DOMAIN>/.well-known/pki-validation/ca3-1234567890123456712345e29da81cc6.txt';
  http_body: string; // 'ca3-1234567890123456712345e29da81cc6';
}
