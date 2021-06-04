import { IsBoolean, IsNotEmpty, IsString } from 'class-validator';
import { Expose } from 'class-transformer';

export class NamespaceInvitationActionRequestDto {
  @IsNotEmpty()
  @IsString()
  @Expose()
  namespaceInvitationId: string;

  @IsNotEmpty()
  @IsBoolean()
  @Expose()
  response: boolean;
}
