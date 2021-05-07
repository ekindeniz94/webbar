import { Expose } from 'class-transformer';

export abstract class BaseEntityDto {
  @Expose()
  id: string;

  @Expose()
  createdBy: string;

  @Expose()
  createdAt: string;

  @Expose()
  updatedAt: string;
}
