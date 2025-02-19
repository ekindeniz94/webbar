import { Expose, Type } from 'class-transformer';
import { IsNotEmpty, ValidateNested } from 'class-validator';
import { WorkspaceInviteMemberRequestDto } from './workspace-invite-member.request.dto';

export class WorkspaceInviteMembersRequestDto {
  @IsNotEmpty()
  @Type(() => WorkspaceInviteMemberRequestDto)
  @ValidateNested({ each: true, message: '$property must be an array' })
  @Expose()
  users: WorkspaceInviteMemberRequestDto[];
}
