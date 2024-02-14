import { Expose, Type } from 'class-transformer';

export class GeoCoordinatesDto {
  @Type(() => Number)
  @Expose()
  latitude: number;

  @Type(() => Number)
  @Expose()
  longitude: number;
}