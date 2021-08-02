import { Expose } from 'class-transformer';
import { IsNotEmpty, IsString } from 'class-validator';

export class DocuSectionMiscDataCreateRequest {
  // Section Title
  @IsNotEmpty()
  @IsString()
  @Expose()
  title: string;

  // Section Content
  @IsNotEmpty()
  @IsString()
  content: string;
}
