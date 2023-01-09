export enum SecurityLogSeverityEnum {
  UNKNOWN_SEVERITY = 'UnknownSeverity',
  NEGLIGIBLE = 'Negligible',
  LOW = 'Low',
  MEDIUM = 'Medium',
  HIGH = 'High',
  CRITICAL = 'Critical'
}

export const ALL_SecurityLogSeverity = [
  SecurityLogSeverityEnum.UNKNOWN_SEVERITY,
  SecurityLogSeverityEnum.NEGLIGIBLE,
  SecurityLogSeverityEnum.LOW,
  SecurityLogSeverityEnum.MEDIUM,
  SecurityLogSeverityEnum.HIGH,
  SecurityLogSeverityEnum.CRITICAL
];
