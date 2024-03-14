import { Expose, Type } from 'class-transformer';
import { K8sNotificationStateEnum } from '../../enums';
import { KubernetesEventDto } from '../../../../../modules/mo-kubernetes';
import { IsOptional, IsString } from 'class-validator';

export class StorageStatus {
  @Expose()
  @IsString()
  namespace: string;

  @Expose()
  @IsString()
  provisioning: 'Manual' | 'Dynamic';

  @Expose()
  @IsOptional()
  persistentVolumeClaim?: any;

  @Expose()
  @IsOptional()
  persistenVolume?: any;

  @Expose()
  @IsOptional()
  usedByPods?: any[];

  @Expose()
  @IsOptional()
  persistentVolumeEvents?: KubernetesEventDto[];

  @Expose()
  @IsOptional()
  persistentVolumeClaimEvents?: KubernetesEventDto[];
}

export class NfsStatusResponseDto {
  @Expose()
  @Type(() => StorageStatus)
  @IsOptional()
  storageStatus?: StorageStatus;

  @Expose()
  @IsString()
  @IsOptional()
  error?: string;

  @Expose()
  public get status(): K8sNotificationStateEnum {
    if (!this.storageStatus && this.error) {
      return K8sNotificationStateEnum.ERROR;
    } else if (this.storageStatus) {
      if (this.storageStatus.persistentVolumeClaim && this.storageStatus.persistenVolume) {
        let bounded = true;
        bounded &&= this.storageStatus.persistenVolume?.status?.phase === 'Bound';
        bounded &&= this.storageStatus.persistentVolumeClaim?.status?.phase === 'Bound';

        if (bounded) {
          return K8sNotificationStateEnum.SUCCEEDED;
        }

        let notOk = false;
        notOk ||= this.storageStatus.persistenVolume?.status?.phase === 'Failed';
        notOk ||= this.storageStatus.persistenVolume?.status?.phase === 'Lost';

        if (notOk) {
          return K8sNotificationStateEnum.FAILED;
        }
      }
    }
    return K8sNotificationStateEnum.PENDING;
  }
}
