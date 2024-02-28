import { Expose } from 'class-transformer';

export class NfsStatusResponseDto {
  @Expose()
  status: any;

  @Expose()
  error: string;
}
