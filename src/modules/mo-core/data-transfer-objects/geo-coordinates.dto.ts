import { Expose } from "class-transformer";

export class GeoCoordinatesDto {
    @Expose()
    latitude: number;
  
    @Expose()
    longitude: number;
  }