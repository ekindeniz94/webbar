import { Expose, Transform, Type } from 'class-transformer';
import { isArray, IsString } from 'class-validator';
import { FilePublicDto } from '../../mo-file';
import { AppTagDto } from './app-tag.dto';
import { BaseEntityDto } from '@mo/database-dto';

export class AppPublicDto extends BaseEntityDto {
  @Type(() => AppTagDto)
  @Transform(({ value }) => (value && isArray(value) ? value : []))
  @Expose()
  tags: AppTagDto[];

  @Expose()
  name: string;

  @Expose()
  version: string;

  @Expose()
  description: string;

  @Expose()
  descriptionShort: string;

  @Type(() => FilePublicDto)
  @Expose()
  icon: FilePublicDto;

  @Type(() => FilePublicDto)
  @Expose()
  image: FilePublicDto;

  @Expose()
  color: string;

  @Expose()
  repositoryLink: string;

  @Expose()
  containerImage: string;

  @Expose()
  containerImageCommand: string;

  @Expose()
  containerImageCommandArgs: string;

  @IsString()
  @Expose()
  documentationLink: String;
}
