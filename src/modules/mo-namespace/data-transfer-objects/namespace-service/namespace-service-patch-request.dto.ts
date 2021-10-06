import { Exclude } from 'class-transformer';
import { NamespaceServiceTypeEnum } from '../../enums';
import { NamespaceServiceCreateRequestDto } from './namespace-service-create-request.dto';
import { NamespaceServiceGroupCreateRequestDto } from './namespace-service-group-create-request.dto';

export class NamespaceServicePatchRequestDto extends NamespaceServiceCreateRequestDto {
  @Exclude()
  name: string;

  @Exclude()
  serviceType: NamespaceServiceTypeEnum;

  @Exclude()
  gitRepository: string;

  @Exclude()
  serviceGroup: NamespaceServiceGroupCreateRequestDto;
}
