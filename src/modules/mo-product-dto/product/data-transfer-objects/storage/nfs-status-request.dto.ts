import { IsNotEmpty, IsString } from 'class-validator';
import { Expose } from 'class-transformer';

export class NfsStatusRequestDto {
  @IsNotEmpty()
  @IsString()
  @Expose()
  namespace: string;

  @IsNotEmpty()
  @IsString()
  @Expose()
  name: string;

  @IsNotEmpty()
  @IsString()
  @Expose()
  type: string;
}
