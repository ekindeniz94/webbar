import { Expose } from 'class-transformer';
import { NamespaceServiceCreateRequestDto } from './namespace-service-create-request.dto';
import { IsNotEmpty, IsString, IsUUID } from 'class-validator';

export class NamespaceServicePatchRequestDto extends NamespaceServiceCreateRequestDto {
  @IsNotEmpty()
  @IsString()
  @IsUUID()
  @Expose()
  id: string;
}
