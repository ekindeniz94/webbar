import { IsOptional, IsString } from 'class-validator';
import { Expose } from 'class-transformer';
import { StripTags } from '../../../../utils';

export class NamespaceInvitationPatchRequestDto {
  @IsOptional()
  @IsString()
  @StripTags()
  @Expose()
  toUserId: string;
}
