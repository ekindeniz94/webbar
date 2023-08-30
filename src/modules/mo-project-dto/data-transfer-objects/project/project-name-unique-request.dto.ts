import { Expose } from 'class-transformer';
import { IsNotEmpty, IsString } from 'class-validator';

export class ProjectNameUniqueRequestDto {
  @IsNotEmpty()
  @IsString()
  @Expose()
  displayName: string;

  @IsNotEmpty()
  @IsString()
  @Expose()
  clusterId: string;
}
