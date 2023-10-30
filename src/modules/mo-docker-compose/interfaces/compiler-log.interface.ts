import { LogLevel } from '../enums';

export interface ICompilerLog {
  consecutive: number;
  timestamp: number;
  severity: LogLevel;
  msg: string;
  lvl: number;
  path: string[];
}
