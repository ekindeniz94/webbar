import { Expose, Transform } from 'class-transformer';
import { MoUtils } from '@mo/js-utils';

export class ProjectNamespaceServiceCnameNameDto {
  @Expose()
  cName: string;

  @Transform(({ value }) => MoUtils.parseBoolean(value))
  @Expose()
  addToTlsHosts: boolean;
}
