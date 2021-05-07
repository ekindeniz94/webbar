import { Expose } from 'class-transformer';
import { IsNotEmpty, IsString } from 'class-validator';

export class AddUserToGroupRequestDto {
  @IsNotEmpty()
  @IsString()
  @Expose()
  groupId: string;

  @IsNotEmpty()
  @IsString()
  @Expose()
  userId: string;
}
