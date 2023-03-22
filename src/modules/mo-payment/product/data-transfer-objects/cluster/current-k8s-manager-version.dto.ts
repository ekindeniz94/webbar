import { Expose } from 'class-transformer';
import { IsSemanticVersion } from '@mo/js-utils';

export class CurrentK8sManagerVersionDto {
  @IsSemanticVersion()
  @Expose()
  version: string;
}
