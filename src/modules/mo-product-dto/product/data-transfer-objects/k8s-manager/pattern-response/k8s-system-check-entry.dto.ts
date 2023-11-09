import { Expose, Type } from 'class-transformer';
import { isEmpty } from 'class-validator';
import { K8sSystemCheckEntryStatusEnum } from '../../../enums/k8s-manager/k8s-system-check-entry-status.enum';

export class K8sSystemCheckEntryDto {
  @Type(() => String)
  @Expose()
  checkName: string;

  @Type(() => String)
  @Expose()
  message: string;

  @Expose()
  installPattern: string;

  @Expose()
  uninstallPattern: string;

  @Expose()
  status: K8sSystemCheckEntryStatusEnum;

  get isInfo(): boolean {
    return (
      !this.installPattern || isEmpty(this.installPattern) || !this.uninstallPattern || isEmpty(this.uninstallPattern)
    );
  }
}
