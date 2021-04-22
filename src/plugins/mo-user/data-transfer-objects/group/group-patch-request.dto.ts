import { IsNotEmpty, IsOptional, IsString, MaxLength } from 'class-validator';
import { Expose, Transform } from 'class-transformer';

export class GroupPatchRequestDto {
  @IsNotEmpty()
  @IsString()
  @MaxLength(256)
  @Transform(({ value }) => value.substring(0, 256))
  @Expose()
  name: string;

  @IsOptional()
  @IsString()
  @MaxLength(512)
  @Transform(({ value }) => value.substring(0, 512))
  @Expose()
  description: string;
}
