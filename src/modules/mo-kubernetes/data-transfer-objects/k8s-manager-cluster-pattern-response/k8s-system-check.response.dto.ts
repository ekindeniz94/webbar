import { Expose, Transform, Type } from 'class-transformer';
import { K8sSystemCheckEntryDto } from './k8s-system-check-entry.dto';
import { isArray } from 'class-validator';

export class K8sSystemCheckResponseDto {
  @Type(() => String)
  @Expose()
  terminalString: string;

  @Type(() => K8sSystemCheckEntryDto)
  @Transform(({ value }) => (value && isArray(value) ? value : []))
  @Expose()
  entries: K8sSystemCheckEntryDto[];
}
