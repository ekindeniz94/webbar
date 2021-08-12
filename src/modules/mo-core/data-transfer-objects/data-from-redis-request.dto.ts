import { Expose } from 'class-transformer';

export class DataFromRedisRequestDto{
  @Expose()
  id: string;
}