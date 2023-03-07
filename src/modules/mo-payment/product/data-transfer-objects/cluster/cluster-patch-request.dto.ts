import { ClusterCreateRequestDto } from './cluster-create-request.dto';
import { IsBoolean, IsNotEmpty, IsOptional, IsString, IsUUID } from 'class-validator';
import { Expose, Transform } from 'class-transformer';
import { MoUtils } from '@mo/js-utils';

export class ClusterPatchRequestDto extends ClusterCreateRequestDto {
  @IsNotEmpty()
  @IsString()
  @IsUUID()
  @Expose()
  id: string;

  @IsOptional()
  @IsString()
  @Expose()
  clusterId: string;

  @Transform(({ value }) => MoUtils.parseBoolean(value))
  @IsOptional()
  @IsBoolean()
  @Expose()
  apiKeyIsActive: boolean;
}
