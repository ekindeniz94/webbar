import { Expose, Transform, Type } from 'class-transformer';
import { isBooleanString, IsBoolean, isBoolean, IsNotEmpty, IsString, IsUUID } from 'class-validator';

export class FilePatchRequestDto {
  @IsNotEmpty()
  @IsString()
  @IsUUID()
  @Expose()
  id: string;

  @Type(() => Boolean)
  @Transform(({ value }) => (isBooleanString(value) || isBoolean(value) ? value : false))
  @IsNotEmpty()
  @IsBoolean()
  @Expose()
  published: boolean;
}
