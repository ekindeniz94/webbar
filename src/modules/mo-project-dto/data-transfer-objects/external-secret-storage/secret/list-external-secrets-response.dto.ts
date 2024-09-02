import { Expose } from 'class-transformer';
import { IsArray, IsString } from 'class-validator';

export class ListExternalSecretsResponseDto {
  @Expose()
  @IsArray()
  @IsString({ each: true })
  secretsInProject: string[];
}
