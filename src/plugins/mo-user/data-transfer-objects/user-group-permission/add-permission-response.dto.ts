import { Expose } from 'class-transformer';

export class AddPermissionResponseDto {
  @Expose()
  id: string;

  @Expose()
  userId: string;

  @Expose()
  groupId: string;

  @Expose()
  permission: string;
}
