import { Expose } from 'class-transformer';
import { IsString } from 'class-validator';

export class NamespaceServiceContainerImageDto {
  @IsString()
  @Expose()
  repositoryname: string;

  @IsString()
  @Expose()
  serviceName: string;

  @IsString()
  @Expose()
  imageName: string;

  @IsString()
  @Expose()
  created: string;

  @IsString()
  @Expose()
  updated: string;
}
