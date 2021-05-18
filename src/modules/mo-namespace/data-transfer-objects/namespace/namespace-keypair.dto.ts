import { Expose } from 'class-transformer';
import { IsNotEmpty, IsString } from 'class-validator';

export class NamespaceKeypairDto {
  @IsNotEmpty()
  @IsString()
  @Expose()
  publicKey: string;

  @IsNotEmpty()
  @IsString()
  @Expose()
  privateKey: string;
}
