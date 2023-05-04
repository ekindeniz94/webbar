import { IsNotEmpty, IsString } from 'class-validator';
import { Expose } from 'class-transformer';

export class ChangeOrganizationUserGroupRequestDto{
  @IsNotEmpty()
  @IsString()
  @Expose()
  groupId: string;

  @IsNotEmpty()
  @IsString()
  @Expose()
  userId: string;
}