import { Expose } from 'class-transformer';
import { IsNotEmpty, IsString } from 'class-validator';

export class ProjectNamespaceNameUniqueRequestDto {
  @IsNotEmpty()
  @IsString()
  @Expose()
  displayName: string;

  @IsNotEmpty()
  @IsString()
  @Expose()
  projectId: string;
}
