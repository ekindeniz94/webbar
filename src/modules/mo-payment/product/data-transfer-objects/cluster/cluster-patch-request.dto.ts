import { ClusterCreateRequestDto } from './cluster-create-request.dto';
import { IsBoolean, IsNotEmpty, IsString, IsUUID } from 'class-validator';
import { Expose, Transform } from 'class-transformer';
import { MoUtils } from '@mo/js-utils';

export class ClusterPatchRequestDto extends ClusterCreateRequestDto {
  @IsNotEmpty()
  @IsString()
  @IsUUID()
  @Expose()
  id: string;

  @IsString()
  @Expose()
  clusterId: string;

  @Transform(({ value }) => MoUtils.parseBoolean(value))
  @IsNotEmpty()
  @IsBoolean()
  @Expose()
  apiKeyIsActive: boolean;
}
