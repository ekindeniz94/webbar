import { Expose, Transform } from 'class-transformer';
import { IsNotEmpty, IsString, Matches, MaxLength, MinLength } from 'class-validator';

export class ClusterCreateRequestDto {
  @IsNotEmpty()
  @IsString()
  @Expose()
  displayName: string;

  @IsNotEmpty()
  @IsString()
  @MinLength(3)
  @MaxLength(64)
  @Matches(/^([a-z])([a-z0-9-_])/, {
    message: '$property must conform to: a-z, 0-9, - ;min 3, max 64 char'
  })
  @Transform(({ value }) => {
    if (!value) {
      return 'mogenius';
    }
    return value
      ?.toLowerCase()
      .replace(/[^a-z0-9-]/g, '-')
      ?.replace(/ +/g, '')
      ?.substring(0, 64)
      .split('-')
      .filter((item: string) => item && item.length > 0)
      .join('-');
  })
  @Expose()
  name: string;
}
