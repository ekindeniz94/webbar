import { NamespaceServiceCnameCreateRequestDto } from './namespace-service-cname-create-request.dto';
import { IsOptional, IsString, IsUUID } from 'class-validator';
import { Expose } from 'class-transformer';
import { StripTags } from '@mo/js-utils';

export class NamespaceServiceCnamePatchRequestDto extends NamespaceServiceCnameCreateRequestDto {
  @IsOptional()
  @IsString()
  @IsUUID()
  @StripTags()
  @Expose()
  id: string;
}
