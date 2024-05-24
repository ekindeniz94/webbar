import { Expose } from 'class-transformer';
import { IsNotEmpty, IsString } from 'class-validator';
import { XtermBaseConfigDto } from './xterm-base-config.dto';

export abstract class XtermBaseNamespaceContainerConfigDto extends XtermBaseConfigDto {
  @IsNotEmpty()
  @IsString()
  @Expose()
  namespace: string;

  @IsNotEmpty()
  @IsString()
  @Expose()
  controller: string;
}
