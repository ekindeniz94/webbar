import { IsNotEmpty, IsString, IsUrl } from 'class-validator';
import { Expose } from 'class-transformer';

export class ClusterHelmRepoAddRequestDto {
  @IsNotEmpty()
  @IsString()
  @Expose()
  repo: string;

  @IsNotEmpty()
  @IsUrl({
    require_host: true,
    require_protocol: true,
    require_tld: true
  })
  @IsString()
  @Expose()
  chartUrl: string;
}
