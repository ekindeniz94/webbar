import { IsNotEmpty, IsString } from 'class-validator';
import { Expose } from 'class-transformer';

export class AddUserToNamespaceRequestDto {
  @IsNotEmpty()
  @IsString()
  @Expose()
  groupId: string;

  @IsNotEmpty()
  @IsString()
  @Expose()
  userId: string;
}
