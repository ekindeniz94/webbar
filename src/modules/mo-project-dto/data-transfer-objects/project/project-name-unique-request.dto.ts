import { Expose } from 'class-transformer';
import { IsNotEmpty, IsString } from 'class-validator';
import { BaseEntityDto } from '@mo/database-dto';

export class ProjectNameUniqueRequestDto extends BaseEntityDto {
  @IsNotEmpty()
  @IsString()
  @Expose()
  displayName: string;

  @IsNotEmpty()
  @IsString()
  @Expose()
  clusterId: string;
}
