import { Exclude } from 'class-transformer';
import { NamespaceKeypairDto } from './namespace-keypair.dto';
import { NamespaceDto } from './namespace.dto';

export class NamespaceCreateResponseDto extends NamespaceDto {
  @Exclude()
  keypair: NamespaceKeypairDto;
}
