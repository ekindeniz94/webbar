import { Expose } from 'class-transformer';
import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class DocuMiscDataPatchRequest {
  // Section Title
  @IsOptional()
  @IsNotEmpty()
  @IsString()
  @Expose()
  title: string;

  // Section Content
  @IsOptional()
  @IsNotEmpty()
  @IsString()
  content: string;
}
