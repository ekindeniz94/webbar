import { Exclude } from 'class-transformer';
import { NamespaceServiceCreateRequestDto } from './namespace-service-create-request.dto';
import { NamespaceServiceGroupCreateRequestDto } from './namespace-service-group-create-request.dto';
import { ServiceTypeEnum } from '../../../mo-service-library';

export class NamespaceServicePatchRequestDto extends NamespaceServiceCreateRequestDto {
  @Exclude()
  name: string;

  @Exclude()
  serviceType: ServiceTypeEnum;

  @Exclude()
  gitRepository: string;

  @Exclude()
  serviceGroup: NamespaceServiceGroupCreateRequestDto;
}
