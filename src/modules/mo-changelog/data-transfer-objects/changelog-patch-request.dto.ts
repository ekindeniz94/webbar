import { Expose } from 'class-transformer';
import { IsOptional, IsString, IsUUID } from 'class-validator';
import { ChangelogCreateRequestDto } from './changelog-create-request.dto';

export class ChangelogPatchRequestDto extends ChangelogCreateRequestDto {
  @IsOptional()
  @IsString()
  @IsUUID()
  @Expose()
  id: string;
}
