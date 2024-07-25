import { IsBoolean, IsNotEmpty, IsString } from 'class-validator';
import { Expose, Type } from 'class-transformer';
import { StripTags } from '@mogenius/js-utils';

export class ProjectInvitationActionRequestDto {
  @IsNotEmpty()
  @IsString()
  @StripTags()
  @Expose()
  projectInvitationId: string;

  @Type(() => Boolean)
  @IsNotEmpty()
  @IsBoolean()
  @Expose()
  response: boolean;
}
