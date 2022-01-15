import { IsNumber } from 'class-validator';
import { Expose, Transform } from 'class-transformer';

export class PaginationResponseDto<T> {
  @IsNumber()
  @Transform(({ value, obj }) => {
    value = value ? Number(value) : 0;
    obj.totalCount = value;
    return value;
  })
  @Expose()
  totalCount: number;

  @IsNumber()
  @Transform(({ value, obj }) => {
    value = value ? Number(value) : 0;
    obj.page = value;
    return value;
  })
  @Expose()
  page: number;

  @IsNumber()
  @Transform(({ value, obj }) => {
    value = value ? Number(value) : 0;
    obj.limit = value;
    return value;
  })
  @Expose()
  limit: number;

  @IsNumber()
  @Transform(({ value, obj }) => {
    value = Math.ceil(obj.totalCount / obj.limit);
    obj.maxPage = value;
    return value;
  })
  @Expose()
  maxPage: number;

  @IsNumber()
  @Transform(({ obj }) => (obj.page - 1 > 0 ? obj.page - 1 : 1))
  @Expose()
  prevPage: number;

  @IsNumber()
  @Transform(({ obj }) => (obj.page + 1 > obj.maxPage ? obj.maxPage : obj.page + 1))
  @Expose()
  nextPage: number;

  @Expose()
  data: T[];

  get hasMore(): boolean {
    return this.nextPage > this.page;
  }
}
