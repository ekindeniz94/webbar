import { Expose } from 'class-transformer';
import { IsNotEmpty, IsString } from 'class-validator';
import { BaseEntityDto } from '@mo/database-dto';

export class ProjectNamespaceServiceNameUniqueRequestDto extends BaseEntityDto {
  @IsNotEmpty()
  @IsString()
  @Expose()
  displayName: string;

  @IsNotEmpty()
  @IsString()
  @Expose()
  projectNamespaceId: string;
}
