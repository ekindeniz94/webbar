import { IsBoolean, IsNotEmpty, IsString } from 'class-validator';
import {Expose, Type} from 'class-transformer';
import { StripTags } from '../../../../utils';

export class NamespaceInvitationActionRequestDto {
  @IsNotEmpty()
  @IsString()
  @StripTags()
  @Expose()
  namespaceInvitationId: string;

  @Type(() => Boolean)
  @IsNotEmpty()
  @IsBoolean()
  @Expose()
  response: boolean;
}
