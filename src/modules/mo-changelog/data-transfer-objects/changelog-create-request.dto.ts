import { Expose, Transform, Type } from 'class-transformer';
import { IsBoolean, isBoolean, IsNotEmpty, IsString } from 'class-validator';
import { IsSemanticVersion } from '../../mo-core/validation-decorators/is-semantic-version.validator';

export class ChangelogCreateRequestDto {
  @IsNotEmpty()
  @IsString()
  @IsSemanticVersion()
  @Expose()
  version: string;

  @IsNotEmpty()
  @IsString()
  @Expose()
  title: string;

  @IsNotEmpty()
  @IsString()
  @Expose()
  logText: string;

  @Type(() => Boolean)
  @Transform(({ value }) => (isBoolean(value) ? value : false))
  @IsNotEmpty()
  @IsBoolean()
  @Expose()
  published: boolean;
}
