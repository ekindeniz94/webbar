import { Expose, Transform } from 'class-transformer';
import { SpectrumAppEdgeIpsConnectivityEnum, SpectrumAppEdgeIpsTypeEnum } from '../../enums/spectrum';

export class SpectrumAppResultEdgeIpsDto {
  @Transform(({ value }) => value ?? SpectrumAppEdgeIpsTypeEnum.DYNAMIC)
  @Expose()
  type: SpectrumAppEdgeIpsTypeEnum; // dynamic

  @Transform(({ value }) => value ?? SpectrumAppEdgeIpsConnectivityEnum.ALL)
  @Expose()
  connectivity: SpectrumAppEdgeIpsConnectivityEnum; // 'all';
}
