import { IsNotEmpty, IsString } from 'class-validator';
import { Expose } from 'class-transformer';

export class SetImageRequestDto {
  @IsNotEmpty()
  @IsString()
  @Expose()
  kind: string;

  @IsNotEmpty()
  @IsString()
  @Expose()
  namespace: string;

  @IsNotEmpty()
  @IsString()
  @Expose()
  resourceName: string;

  @IsNotEmpty()
  @IsString()
  @Expose()
  containerName: string;

  @IsNotEmpty()
  @IsString()
  @Expose()
  image: string;
}
