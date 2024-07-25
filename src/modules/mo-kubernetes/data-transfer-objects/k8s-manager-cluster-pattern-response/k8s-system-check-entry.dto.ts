import { Expose, Type } from 'class-transformer';
import { IsOptional, isEmpty } from 'class-validator';
import { K8sSystemCheckEntryHelmStatusEnum } from '../../enums/k8s-manager/k8s-system-check-entry-helm-status.enum';

export class K8sSystemCheckEntryDto {
  @Type(() => Boolean)
  @Expose()
  isRequired: boolean;

  @Type(() => Boolean)
  @Expose()
  isRunning: boolean;

  @Type(() => Boolean)
  @Expose()
  wantsToBeInstalled: boolean;

  @Type(() => String)
  @Expose()
  checkName: string;

  @Type(() => String)
  @Expose()
  message: string;

  @IsOptional()
  @Type(() => String)
  @Expose()
  errorMessage: string;

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
  helmStatus: K8sSystemCheckEntryHelmStatusEnum;

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

  get hasUpdate(): boolean {
    return (
      !!this.upgradePattern &&
      !!this.versionAvailable &&
      !!this.versionInstalled &&
      this.versionAvailable !== this.versionInstalled
    );
  }

  get isInstalled(): boolean {
    const { UNKNOWN, DEPLOYED, SUPERSEDED, UNINSTALLED, FAILED } = K8sSystemCheckEntryHelmStatusEnum;
    return [UNKNOWN, DEPLOYED, SUPERSEDED, UNINSTALLED, FAILED].includes(this.helmStatus) && this.isRunning;
  }

  get isUninstalled(): boolean {
    const { UNKNOWN, UNINSTALLED, FAILED } = K8sSystemCheckEntryHelmStatusEnum;
    return [UNKNOWN, UNINSTALLED, FAILED].includes(this.helmStatus) && !this.isRunning;
  }

  get isLoading(): boolean {
    const { PENDING_INSTALL, PENDING_UPGRADE, PENDING_ROLLBACK, DEPLOYED, SUPERSEDED } =
      K8sSystemCheckEntryHelmStatusEnum;
    return (
      [PENDING_INSTALL, PENDING_UPGRADE, PENDING_ROLLBACK].includes(this.helmStatus) ||
      ([DEPLOYED, SUPERSEDED].includes(this.helmStatus) && !this.isRunning)
    );
  }

  get isLocked(): boolean {
    const { UNKNOWN, UNINSTALLED } = K8sSystemCheckEntryHelmStatusEnum;
    return [UNKNOWN, UNINSTALLED].includes(this.helmStatus) && this.isRunning;
  }

  get hasError(): boolean {
    return !!this.errorMessage || this.helmStatus === K8sSystemCheckEntryHelmStatusEnum.FAILED;
  }
}
