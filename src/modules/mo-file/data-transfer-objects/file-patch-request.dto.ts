import { Expose, Type } from 'class-transformer';
import { IsNotEmpty, IsString, IsUUID, ValidateNested } from 'class-validator';
import { FileCreateRequestDto } from './file-create-request.dto';
import { FileTranslationPatchRequestDto } from './file-translation-patch-request.dto';

export class FilePatchRequestDto extends FileCreateRequestDto {
  @IsNotEmpty()
  @IsString()
  @IsUUID()
  @Expose()
  id: string;

  @Type(() => FileTranslationPatchRequestDto)
  @ValidateNested()
  @Expose()
  translations: FileTranslationPatchRequestDto[];
}
