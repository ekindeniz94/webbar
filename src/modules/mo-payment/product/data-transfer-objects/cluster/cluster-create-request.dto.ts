import { Expose } from 'class-transformer';
import { IsNotEmpty, IsString } from 'class-validator';

export class ClusterCreateRequestDto {
  @IsNotEmpty()
  @IsString()
  @Expose()
  displayName: string;
}
