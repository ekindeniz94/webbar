import { Expose, Transform } from 'class-transformer';
import { IsEnum, IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { ClusterProviderEnum } from '../../enums';

export class ClusterServiceListByNamesRequestDto {
  @IsNotEmpty()
  @IsString()
  @Expose()
  namespaceId: string;

  @IsNotEmpty()
  @IsString({ each: true })
  @Expose()
  serviceNames: string[];
}
