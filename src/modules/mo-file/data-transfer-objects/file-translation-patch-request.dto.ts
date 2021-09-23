import { IsOptional, IsString, IsUUID } from 'class-validator';
import { Expose } from 'class-transformer';
import { FileTranslationCreateRequestDto } from './file-translation-create-request.dto';

export class FileTranslationPatchRequestDto extends FileTranslationCreateRequestDto {
  @IsOptional()
  @IsString()
  @IsUUID()
  @Expose()
  id?: string;
}
