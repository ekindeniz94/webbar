import { Expose, Type } from 'class-transformer';
import { isEmpty } from 'class-validator';

export class K8sSystemCheckEntryDto {
  private _disabled: boolean = false;

  @Type(() => String)
  @Expose()
  checkName: string;

  @Type(() => Boolean)
  @Expose()
  success: boolean;

  @Type(() => String)
  @Expose()
  message: string;

  @Expose()
  installPattern: string;

  @Expose()
  uninstallPattern: string;

  get isInfo(): boolean {
    return (
      !this.installPattern || isEmpty(this.installPattern) || !this.uninstallPattern || isEmpty(this.uninstallPattern)
    );
  }

  get install(): boolean {
    return !this.success;
  }

  get uninstall(): boolean {
    return this.success;
  }

  get disabled(): boolean {
    return this._disabled;
  }

  set disabled(value: boolean) {
    this._disabled = value;
  }
}
