import { IsOptional, IsString } from 'class-validator';
import { Expose } from 'class-transformer';
import { StripTags } from '@mo/js-utils';

export class OrganizationInvitationPatchRequestDto {
  @IsOptional()
  @IsString()
  @StripTags()
  @Expose()
  toUserId: string;
}
