import { IsBoolean, IsOptional, IsString, IsUUID } from 'class-validator';
import { Expose } from 'class-transformer';
import { StripTags, TransformToBoolean } from '@mo/js-utils';
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
