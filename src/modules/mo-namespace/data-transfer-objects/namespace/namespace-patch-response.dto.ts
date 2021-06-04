import { Exclude, Type } from 'class-transformer';
import { NamespaceKeypairDto } from './namespace-keypair.dto';
import { NamespaceDto } from './namespace.dto';

export class NamespacePatchResponseDto extends NamespaceDto {
  @Type(() => NamespaceKeypairDto)
  @Exclude()
  keypair: NamespaceKeypairDto;
}
