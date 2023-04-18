import { Expose } from 'class-transformer';
import { NamespaceServiceCreateRequestDto } from './namespace-service-create-request.dto';
import { AppDto } from '../../../mo-app-library-dto';
import { IdDto } from '@mo/core-dto';

export class NamespaceServiceDockerComposeResponseDto {
  @Expose()
  services: NamespaceServiceCreateRequestDto[];

  @Expose()
  apps: {
    id: IdDto;
    app: AppDto;
  }[];
}
