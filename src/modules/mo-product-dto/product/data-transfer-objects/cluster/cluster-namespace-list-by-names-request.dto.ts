import { Expose, Transform } from 'class-transformer';
import { IsEnum, IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { ClusterProviderEnum } from '../../enums';

export class ClusterNamespaceListByNamesRequestDto {
  @IsNotEmpty()
  @IsString({ each: true })
  @Expose()
  namespaceNames: string[];
}
