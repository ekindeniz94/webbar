import { IsBoolean, IsOptional, IsString, IsUUID } from 'class-validator';
import { Expose, Transform } from 'class-transformer';
import { MoUtils, StripTags } from '@mo/js-utils';
import { ProjectNamespaceServiceCnameCreateRequestDto } from './project-namespace-service-cname-create-request.dto';

export class ProjectNamespaceServiceCnamePatchRequestDto extends ProjectNamespaceServiceCnameCreateRequestDto {
  @IsOptional()
  @IsString()
  @IsUUID()
  @StripTags()
  @Expose()
  id: string;

  @IsBoolean()
  @Transform(({ value }) => MoUtils.parseBoolean(value))
  @Expose()
  addToTlsHosts: boolean;
}
