import { ComposeLogLevel } from '../enums';

export interface ICompilerLog {
  consecutive: number;
  timestamp: number;
  severity: ComposeLogLevel;
  msg: string;
  lvl: number;
  path: string[];
}
