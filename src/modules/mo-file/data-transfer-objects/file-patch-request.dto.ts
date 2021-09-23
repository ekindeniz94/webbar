import { Expose, Transform, Type } from 'class-transformer';
import { IsBoolean, isBoolean, isBooleanString, IsNotEmpty, IsString, IsUUID, ValidateNested } from 'class-validator';
import { FileCreateRequestDto } from './file-create-request.dto';
import { FileTranslationPatchRequestDto } from './file-translation-patch-request.dto';

export class FilePatchRequestDto extends FileCreateRequestDto{
  @IsNotEmpty()
  @IsString()
  @IsUUID()
  @Expose()
  id: string;

  @Type(() => FileTranslationPatchRequestDto)
  @ValidateNested()
  @Expose()
  translations: FileTranslationPatchRequestDto[];

  @Type(() => Boolean)
  @Transform(({ value }) => (isBooleanString(value) || isBoolean(value) ? value : false))
  @IsNotEmpty()
  @IsBoolean()
  @Expose()
  published: boolean;
}
