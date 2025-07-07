import { IsNotEmpty, IsString } from 'class-validator';
import { Expose } from 'class-transformer';

export class GithubActionsVariablesSecretsCreateRequestDto {
  @IsNotEmpty()
  @IsString()
  @Expose()
  cloneUrl: string;

  @IsNotEmpty()
  @IsString()
  @Expose()
  name: string;

  @IsNotEmpty()
  @IsString()
  @Expose()
  value: string;
}
