import { Expose, Type } from 'class-transformer';
import { isEmpty } from 'class-validator';
import { K8sSystemCheckEntryStatusEnum } from '../../../enums/k8s-manager/k8s-system-check-entry-status.enum';

export class K8sSystemCheckEntryDto {
  @Type(() => Boolean)
  @Expose()
  isRequired: boolean;

  @Type(() => Boolean)
  @Expose()
  wantsToBeInstalled: boolean;

  @Type(() => String)
  @Expose()
  checkName: string;

  @Type(() => String)
  @Expose()
  message: string;

  @Type(() => String)
  @Expose()
  description: string;

  @Expose()
  installPattern: string;

  @Expose()
  uninstallPattern: string;

  @Expose()
  upgradePattern: string;

  @Expose()
  versionInstalled: string;

  @Expose()
  versionAvailable: string;

  @Expose()
  status: K8sSystemCheckEntryStatusEnum;

  get isInfo(): boolean {
    return (
      !this.installPattern ||
      isEmpty(this.installPattern) ||
      this.installPattern === '' ||
      !this.uninstallPattern ||
      isEmpty(this.uninstallPattern) ||
      this.uninstallPattern === ''
    );
  }
}
