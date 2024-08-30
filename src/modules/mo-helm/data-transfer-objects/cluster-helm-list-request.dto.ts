import { IsNotEmpty, IsString } from 'class-validator';
import { Expose } from 'class-transformer';

export class ClusterHelmListRequestDto {
  @IsNotEmpty()
  @IsString()
  @Expose()
  namespace: string;
}
