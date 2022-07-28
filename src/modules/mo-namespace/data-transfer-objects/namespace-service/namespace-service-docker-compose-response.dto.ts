import { Expose } from 'class-transformer';
import { AppDto, AppIdDto } from '../../../mo-app-library';
import { NamespaceServiceCreateRequestDto } from './namespace-service-create-request.dto';

export class NamespaceServiceDockerComposeResponseDto {
  @Expose()
  services: NamespaceServiceCreateRequestDto[];

  @Expose()
  apps: { id: AppIdDto; app: AppDto }[];
}
