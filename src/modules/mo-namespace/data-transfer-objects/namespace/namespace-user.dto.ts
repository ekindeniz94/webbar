import { Expose } from 'class-transformer';
import { IsNotEmpty, IsString } from 'class-validator';

export class NamespaceUser {
  @IsNotEmpty()
  @IsString()
  @Expose()
  userId: string;

  @IsNotEmpty()
  @IsString()
  @Expose()
  accessRight: string;
}