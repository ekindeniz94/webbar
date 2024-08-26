import { Expose } from 'class-transformer';
import { IsBoolean, IsString, IsOptional } from 'class-validator';

export class ImageUploadDto {
  @IsBoolean()
  @Expose()
  success: boolean;

  @IsString()
  @IsOptional()
  @Expose()
  imageUrl?: string;
}
