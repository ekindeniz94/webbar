import { Expose, Transform } from 'class-transformer';
import { IsOptional } from 'class-validator';

export class K8sResourceEntryDto {
  @Expose()
  kind: string;

  @Expose()
  name: string;

  @Transform(({ value }: { value: string }) => {
    if (value === null || value === undefined || value === 'null' || value === 'undefined') {
      return undefined;
    }
    return value;
  })
  @IsOptional()
  @Expose()
  namespace?: string | undefined | null;

  @Expose()
  group?: string;

  @Expose()
  version?: string;

  @Expose()
  get namespaced(): boolean {
    return this.namespace === '';
  }
}
