import { IsNotEmpty, IsString } from 'class-validator';
import { Expose } from 'class-transformer';

export class AddUserToNamespaceGroupRequestDto {
  @IsNotEmpty()
  @IsString()
  @Expose()
  namespaceId: string;

  @IsNotEmpty()
  @IsString()
  @Expose()
  groupId: string;

  @IsNotEmpty()
  @IsString()
  @Expose()
  userId: string;
}
