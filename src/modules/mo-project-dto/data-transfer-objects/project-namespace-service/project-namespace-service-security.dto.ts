import { Expose, Transform } from 'class-transformer';
import { BuildStateEnum } from '../../../mo-notification';
import moment from 'moment/moment';
import { SecurityLogInterface, SecurityLogSeverityEnum } from '../../../mo-namespace';

export class ProjectNamespaceServiceSecurityDto {
  @Expose()
  id: string;

  @Transform(({ value }) => (value && value !== 'undefined' && value !== 'null' ? moment(value).toDate() : value))
  @Expose()
  createdAt: string | Date;

  @Transform(({ value }) => (value && value !== 'undefined' && value !== 'null' ? moment(value).toDate() : value))
  @Expose()
  updatedAt: string | Date;

  @Expose()
  buildId: string;

  @Expose()
  buildState?: BuildStateEnum;

  @Expose()
  vulnerabilitiesData: string;

  @Expose()
  vulnerabilityInfo: string;

  @Expose()
  static compileLogData(
    csvString: string
  ): {
    entries: SecurityLogInterface[];
    sums: { [key: string]: number };
    headers: string[];
  } {
    const array = csvString.split('\n');
    let result: SecurityLogInterface[] = [];
    const sums: { [key: string]: number } = {};
    const logHeaders = array[0].split(',');

    // remove single quotes from start end end
    for (let index = 0; index < array.length; index++) {
      array[index] = array[index].substring(1); // start
      array[index] = array[index].slice(0, -1); // end
    }

    for (let i = 1; i < array.length; i++) {
      const obj: any = {};
      const currentline = array[i].split("','");
      for (let j = 0; j < logHeaders.length; j++) {
        obj[logHeaders[j]] = currentline[j];
      }
      const entry = obj as SecurityLogInterface;
      result.push(entry);
      sums[entry.Severity] = sums[entry.Severity] ? sums[entry.Severity] + 1 : 1;
    }
    // SORT BY SEVERITY
    const order = Object.values(SecurityLogSeverityEnum);
    result = result.sort((a, b) => order.indexOf(b.Severity) - order.indexOf(a.Severity));
    return { entries: result, sums: sums, headers: logHeaders };
  }
}
