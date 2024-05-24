import {
  isBoolean,
  IsBoolean,
  IsNotEmpty,
  IsOptional,
  isString,
  IsString,
  MaxLength,
  ValidateNested
} from 'class-validator';
import { Expose, Transform, Type } from 'class-transformer';
import { DTO_VALIDATION_CONST } from '../../mo-core';
import { FileTranslationCreateRequestDto } from './file-translation-create-request.dto';

export class FileCreateRequestDto {
  @IsOptional()
  @IsString()
  @MaxLength(DTO_VALIDATION_CONST.FILE.COPYRIGHT.MAX)
  @Transform(
    ({ value }) =>
      (value && isString(value) ? value.trim() : value)?.substring(0, DTO_VALIDATION_CONST.FILE.COPYRIGHT.MAX)
  )
  @Expose()
  copyright?: string;

  @Type(() => FileTranslationCreateRequestDto)
  @ValidateNested()
  @Expose()
  translations: FileTranslationCreateRequestDto[];

  @Type(() => Boolean)
  @Transform(({ value }) => (isBoolean(value) ? value : false))
  @IsNotEmpty()
  @IsBoolean()
  @Expose()
  published: boolean;
}
