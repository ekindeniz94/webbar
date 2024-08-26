import { Expose, Transform } from 'class-transformer';
import { IsNotEmpty, IsString } from 'class-validator';
import { MoProjectDtoUtils, PROJECT_CONST } from '../..';

export class ListExternalSecretsRequestDto {
  @IsNotEmpty()
  @IsString()
  @Expose()
  name: string;
}
