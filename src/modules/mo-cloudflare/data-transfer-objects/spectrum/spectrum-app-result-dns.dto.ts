import { Expose, Transform } from 'class-transformer';
import { SpectrumAppDnsTypeEnum } from '../../enums/spectrum';

export class SpectrumAppResultDnsDto {
  @Transform(({ value }) => value ?? SpectrumAppDnsTypeEnum.CNAME)
  @Expose()
  type: SpectrumAppDnsTypeEnum; // CNAME

  @Expose()
  name: string;
}
