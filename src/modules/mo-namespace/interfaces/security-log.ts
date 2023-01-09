import { SecurityLogSeverityEnum } from '../enums/security-log.enum';

export interface SecurityLogInterface {
  PackageName: string;
  Version: string;
  FixedInVersion: string;
  ID: string;
  Severity: SecurityLogSeverityEnum;
  Url: string;
  Description: string;
}
