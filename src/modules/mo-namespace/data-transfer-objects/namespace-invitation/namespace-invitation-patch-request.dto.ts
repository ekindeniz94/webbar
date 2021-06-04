import { IsOptional, IsString } from 'class-validator';
import { Expose } from 'class-transformer';

export class NamespaceInvitationPatchRequestDto {
  @IsOptional()
  @IsString()
  @Expose()
  toUserId: string;
}
