import { Expose } from 'class-transformer';
import { IsString } from 'class-validator';

export class ClusterDisplayNameDto {
  @IsString()
  @Expose()
  id: string;

  @IsString()
  @Expose()
  displayName: string;
}
