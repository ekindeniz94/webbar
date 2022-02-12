import { IsBoolean, IsNotEmpty, IsString } from 'class-validator';
import {Expose, Type} from 'class-transformer';

export class NamespaceInvitationActionRequestDto {
  @IsNotEmpty()
  @IsString()
  @Expose()
  namespaceInvitationId: string;

  @Type(() => Boolean)
  @IsNotEmpty()
  @IsBoolean()
  @Expose()
  response: boolean;
}
