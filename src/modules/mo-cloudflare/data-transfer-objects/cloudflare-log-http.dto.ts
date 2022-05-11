import { Expose, Transform } from 'class-transformer';
import { isNumber } from 'class-validator';

export class CloudflareLogHttpDto {
  @Expose()
  clientRequestHost: string;

  @Transform(({ value }) => (isNumber(+value) && !isNaN(+value) ? +value : 0))
  @Expose()
  clientRequestBytes: number;

  @Transform(({ value }) => (isNumber(+value) && !isNaN(+value) ? +value : 0))
  @Expose()
  cacheResponseBytes: number;

  @Transform(({ value }) => (isNumber(+value) && !isNaN(+value) ? +value : 0))
  @Expose()
  originResponseStatus: number;

  @Transform(({ value }) => (isNumber(+value) && !isNaN(+value) ? +value : 0))
  @Expose()
  originResponseBytes: number;

  @Transform(({ value }) => (isNumber(+value) && !isNaN(+value) ? +value : 0))
  @Expose()
  edgeResponseBytes: number;

  @Transform(({ value }) => (isNumber(+value) && !isNaN(+value) ? +value : 0))
  @Expose()
  requestCount: number;
}
