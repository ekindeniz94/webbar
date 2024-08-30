import { Expose, Transform } from 'class-transformer';
import moment from 'moment';

export class HelmReleaseStatusInfoDto {
  @Expose()
  name: string;

  @Transform(({ value }) => (value && value !== 'undefined' && value !== 'null' ? moment(value).toDate() : value))
  @Expose()
  lastDeployed: Date;

  @Expose()
  namespace: string;

  @Expose()
  status: string;

  @Expose()
  version: number;

  @Expose()
  chart: string;

  @Expose()
  get statusString(): string {
    const result = [];
    result.push();
    result.push(`NAME: ${this.name}`);
    result.push(`LAST DEPLOYED: ${this.lastDeployed}`);
    result.push(`NAMESPACE: ${this.namespace}`);
    result.push(`STATUS: ${this.status}`);
    result.push(`REVISION: ${this.version}`);
    result.push(`CHART:${this.chart}`);
    return result.join('\n');
  }
}
