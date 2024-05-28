import { isBoolean, IsBoolean, IsOptional, IsString, IsUUID } from 'class-validator';
import { Expose, Transform } from 'class-transformer';
import { MoUtils, StripTags, TransformToBoolean } from '@mo/js-utils';
import { ProjectNamespaceServiceCnameCreateRequestDto } from './project-namespace-service-cname-create-request.dto';

export class ProjectNamespaceServiceCnamePatchRequestDto extends ProjectNamespaceServiceCnameCreateRequestDto {
  @IsOptional()
  @IsString()
  @IsUUID()
  @StripTags()
  @Expose()
  id: string;

  @TransformToBoolean(true)
  @IsBoolean()
  @Expose()
  addToTlsHosts: boolean;
}
