import { Exclude } from 'class-transformer';
import { NamespaceKeypairDto } from './namespace-keypair.dto';
import { NamespaceDto } from './namespace.dto';

export class NamespacePatchResponseDto extends NamespaceDto {
  @Exclude()
  keypair: NamespaceKeypairDto;
}
