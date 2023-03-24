import { Expose, Transform, Type } from 'class-transformer';
import { BaseEntityDto } from '../../../../mo-core';

export class ServiceLogPayloadDto extends BaseEntityDto {
    @Expose()
    namespace: string;
  
    @Expose()
    podId: string;

    @Expose()
    serverTimestamp: string;

    @Expose()
    log: string;
}