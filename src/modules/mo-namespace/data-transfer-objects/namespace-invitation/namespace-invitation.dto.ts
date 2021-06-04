import { IsBoolean, IsNotEmpty, IsString } from 'class-validator';
import { Expose } from 'class-transformer';

export class NamespaceInvitationDto {
  @Expose()
  id: string;

  @Expose()
  namespaceName: string;

  @Expose()
  namespaceRole: string;
}
