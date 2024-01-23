import { Expose } from 'class-transformer';
import { IsNotEmpty, IsString } from 'class-validator';

export class ClusterAdminCreateRequestDto {
  @IsNotEmpty()
  @IsString()
  @Expose()
  displayName: string;
}
