import { NamespaceStageCreateRequestDto } from './namespace-stage-create-request.dto';
import { IsNotEmpty, IsString, IsUUID } from 'class-validator';
import { Expose } from 'class-transformer';

export class NamespaceStagePatchRequestDto extends NamespaceStageCreateRequestDto {
  @IsNotEmpty()
  @IsString()
  @IsUUID()
  @Expose()
  id: string;
}
