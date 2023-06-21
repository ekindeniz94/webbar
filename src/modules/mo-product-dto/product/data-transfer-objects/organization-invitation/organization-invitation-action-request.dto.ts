import { IsBoolean, IsNotEmpty, IsString } from 'class-validator';
import { Expose, Type } from 'class-transformer';
import { StripTags } from '@mo/js-utils';

export class OrganizationInvitationActionRequestDto {
  @IsNotEmpty()
  @IsString()
  @StripTags()
  @Expose()
  organizationInvitationId: string;

  @Type(() => Boolean)
  @IsNotEmpty()
  @IsBoolean()
  @Expose()
  response: boolean;
}
