import { Expose, Type } from 'class-transformer';
import { K8sNotificationStateEnum } from '../../enums';
import { KubernetesEventDto } from '../../../../../modules/mo-kubernetes';
import { IsOptional, IsString } from 'class-validator';
//
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
  persistentVolume?: any;

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
      if (this.storageStatus.persistentVolumeClaim && this.storageStatus.persistentVolume) {
        let notOk = false;
        notOk ||= this.storageStatus.persistentVolume?.status?.phase === 'Failed';
        notOk ||= this.storageStatus.persistentVolume?.status?.phase === 'Lost';

        if (notOk) {
          return K8sNotificationStateEnum.FAILED;
        }

        let success = true;
        success &&= this.storageStatus.persistentVolume?.status?.phase === 'Bound';
        success &&= this.storageStatus.persistentVolumeClaim?.status?.phase === 'Bound';
        success &&=
          this.storageStatus.usedByPods?.find(
            (pod) =>
              pod.metadata?.name?.startsWith(this.storageStatus?.persistentVolumeClaim?.metadata?.name) &&
              pod.metadata?.namespace === this.storageStatus?.namespace
          )?.status?.phase === 'Running';

        if (success) {
          return K8sNotificationStateEnum.SUCCEEDED;
        }
      }
    }

    return K8sNotificationStateEnum.PENDING;
  }
}
