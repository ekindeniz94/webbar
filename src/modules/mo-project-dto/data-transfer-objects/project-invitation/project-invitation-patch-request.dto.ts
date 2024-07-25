import { IsOptional, IsString } from 'class-validator';
import { Expose } from 'class-transformer';
import { StripTags } from '@mogenius/js-utils';

export class ProjectInvitationPatchRequestDto {
  @IsOptional()
  @IsString()
  @StripTags()
  @Expose()
  toUserId: string;
}
