import { Expose } from 'class-transformer';
import { IsOptional } from 'class-validator';

export class NamespacePatchRequestDto {
  @IsOptional()
  @Expose()
  icon: string;

  @IsOptional()
  @Expose()
  description: string;
}
