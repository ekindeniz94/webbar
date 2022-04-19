import { NamespaceStageCreateRequestDto } from './namespace-stage-create-request.dto';
import { IsNotEmpty, IsString, IsUUID } from 'class-validator';
import { Expose } from 'class-transformer';
import { StripTags } from '../../../../utils';

export class NamespaceStagePatchRequestDto extends NamespaceStageCreateRequestDto {
  @IsNotEmpty()
  @IsString()
  @IsUUID()
  @StripTags()
  @Expose()
  id: string;
}
