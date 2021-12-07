import { Expose, Type } from 'class-transformer';
import { IsString } from 'class-validator';
import { BaseEntityDto } from '../../../mo-core';
import { FilePublicDto } from '../../../mo-file';

export class ServicePublicDto extends BaseEntityDto {
  @Expose()
  name: string;

  @Expose()
  descriptionShort: string;

  @Type(() => FilePublicDto)
  @Expose()
  icon: FilePublicDto;

  @Type(() => FilePublicDto)
  @Expose()
  image: FilePublicDto;

  @IsString()
  @Expose()
  docuLink: String;
}
