import { Expose, Transform, Type } from 'class-transformer';
import { BaseEntityDto } from '../../../../mo-core';

export class ServiceLogErrorPayloadDto extends BaseEntityDto {
    @Expose()
    namespace: string;
  
    @Expose()
    podId: string;

    @Expose()
    restarts: number;

    @Expose()
    log: string;
}