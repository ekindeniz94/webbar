import { Expose } from 'class-transformer';
import { IsOptional, IsString } from 'class-validator';

export class MetricIdentifier {
  @Expose()
  @IsString()
  name: string;

  @Expose()
  @IsString()
  @IsOptional()
  selector: string;
}
