import { Expose } from 'class-transformer';
import { IsArray, IsString } from 'class-validator';

export class ListExternalSecretStoresResponseDto {
  @Expose()
  @IsArray()
  @IsString({ each: true })
  stores: string[];
}
