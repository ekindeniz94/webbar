import { IsNotEmpty, IsString } from 'class-validator';
import { Expose } from 'class-transformer';

export class GithubActionsVariablesSecretsListRequestDto {
  @IsNotEmpty()
  @IsString()
  @Expose()
  cloneUrl: string;
}
