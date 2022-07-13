import { NamespaceServiceCnameCreateRequestDto } from './namespace-service-cname-create-request.dto';
import { IsOptional, IsString, IsUUID } from 'class-validator';
import { StripTags } from '../../../../utils';
import { Expose } from 'class-transformer';

export class NamespaceServiceCnamePatchRequestDto extends NamespaceServiceCnameCreateRequestDto {
  @IsOptional()
  @IsString()
  @IsUUID()
  @StripTags()
  @Expose()
  id: string;
}
