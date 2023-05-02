import { Expose } from 'class-transformer';
import { IsNumber, IsString } from 'class-validator';

export class VolumeRequestDto {
  @Expose()
  @IsString()
  namespaceName: string;

  @Expose()
  @IsString()
  volumeName: string;

  @Expose()
  @IsNumber()
  sizeInGb: number;
}
