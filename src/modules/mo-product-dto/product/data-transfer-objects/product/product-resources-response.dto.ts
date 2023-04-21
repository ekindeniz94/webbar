import { Expose } from 'class-transformer';

export class ProductResourcesResponseDto {
  @Expose()
  id: string;

  @Expose()
  name: string;

  @Expose()
  availableCpuCores: number;

  @Expose()
  availableRamBytes: number;

  @Expose()
  availableStorageBytes: number;

  @Expose()
  availableTrafficBytes: number;

  @Expose()
  availableTemporaryStorageBytes: number;
}
