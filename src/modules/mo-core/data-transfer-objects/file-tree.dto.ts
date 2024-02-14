import { IsEnum, IsMimeType, IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { Expose } from 'class-transformer';
import { FileTypeEnum } from '../enums/file-type.enum';

export class FileTreeDto {
  @IsNotEmpty()
  @IsString()
  @Expose()
  name: string;

  @IsEnum(FileTypeEnum)
  @Expose()
  type: FileTypeEnum;

  @IsOptional()
  @IsString()
  @Expose()
  ext: string;

  @IsOptional()
  @IsMimeType()
  @Expose()
  mime: string;
}
