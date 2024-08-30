import { IsBoolean, IsNotEmpty, IsString } from 'class-validator';
import { Expose } from 'class-transformer';

export class ClusterHelmUninstallRequestDto {
  @IsNotEmpty()
  @IsString()
  @Expose()
  namespace: string;

  @IsNotEmpty()
  @IsString()
  @Expose()
  release: string;

  @IsNotEmpty()
  @IsBoolean()
  @Expose()
  dryRun: boolean;
}
