import { Expose, Transform } from 'class-transformer';
import { IsEnum, IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { ClusterProviderEnum } from '../../enums';

export class ClusterCreateRequestDto {
  @IsNotEmpty()
  @IsString()
  @Expose()
  displayName: string;

  @IsOptional()
  @IsEnum(ClusterProviderEnum)
  @Transform(({ value }) => value ?? ClusterProviderEnum.UNKNOWN)
  @Expose()
  provider: ClusterProviderEnum;
}
