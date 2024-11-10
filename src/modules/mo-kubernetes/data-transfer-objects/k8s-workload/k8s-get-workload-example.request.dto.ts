import { Expose, Transform } from 'class-transformer';
import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class K8sGetWorkloadExampleRequestDto {
  @IsNotEmpty()
  @IsString()
  @Expose()
  kind: string;

  @IsNotEmpty()
  @IsString()
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

  @IsOptional()
  @IsString()
  @Expose()
  group?: string;

  @IsOptional()
  @IsString()
  @Expose()
  version?: string;
}
