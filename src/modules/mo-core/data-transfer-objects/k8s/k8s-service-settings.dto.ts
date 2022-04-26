import { Expose } from 'class-transformer';

export class K8sServiceSettingsDto {
    @Expose()
    limitCpuCores: number;

    @Expose()
    limitMemoryMB: number;

    @Expose()
    ephemeralStorageMB: number;

    @Expose()
    replicaCount: number;
}