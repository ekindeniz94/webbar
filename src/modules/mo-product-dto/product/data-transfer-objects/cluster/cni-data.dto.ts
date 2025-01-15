import { Expose, Type } from 'class-transformer';
import { CniPluginDto } from './cni-plugin.dto';

export class CniDataDto {
  @Expose()
  name: string;

  @Expose()
  node: string;

  @Expose()
  cniVersion: string;

  @Type(() => CniPluginDto)
  @Expose()
  plugins: CniPluginDto[];
}
