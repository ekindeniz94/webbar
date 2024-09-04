import { Expose } from 'class-transformer';
import { IsNotEmpty, IsString } from 'class-validator';

export class ListExternalSecretsRequestDto {
  @IsNotEmpty()
  @IsString()
  @Expose()
  namePrefix: string;
}
