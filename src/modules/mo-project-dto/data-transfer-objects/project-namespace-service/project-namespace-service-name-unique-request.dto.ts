import { Expose } from 'class-transformer';
import { IsNotEmpty, IsString } from 'class-validator';

export class ProjectNamespaceServiceNameUniqueRequestDto {
  @IsNotEmpty()
  @IsString()
  @Expose()
  displayName: string;

  @IsNotEmpty()
  @IsString()
  @Expose()
  projectNamespaceId: string;
}
