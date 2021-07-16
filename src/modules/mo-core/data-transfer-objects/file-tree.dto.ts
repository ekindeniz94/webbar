import { isArray, IsMimeType, IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { Expose, Transform, Type } from 'class-transformer';

export class FileTreeDto {
  @IsNotEmpty()
  @IsString()
  @Expose()
  name: string;

  @IsOptional()
  @IsString()
  @Expose()
  ext: string;

  @IsOptional()
  @IsMimeType()
  @Expose()
  mime: string;

  @IsOptional()
  @Type(() => FileTreeDto)
  @Transform(({ value }) => (value && isArray(value) ? value : []))
  @Expose()
  children: FileTreeDto[];

  get hasChildren(): boolean {
    return this.children.length > 0;
  }
}
