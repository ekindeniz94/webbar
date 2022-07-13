export interface ICloudflareCustomHostnameDetailsSslSettings {
  http2: 'on' | 'off';
  tls_1_3: 'on' | 'off';
  min_tls_version: '1.0' | '1.1' | '1.2' | '1.3';
  ciphers: string[]; // 'AES128-SHA', 'ECDHE-RSA-AES128-GCM-SHA256'
  early_hints: 'on' | 'off';
}
