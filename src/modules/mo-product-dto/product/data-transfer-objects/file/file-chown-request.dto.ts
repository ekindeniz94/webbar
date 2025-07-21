/*import { Expose } from 'class-transformer';
import { IsString } from 'class-validator';

export class FileChownRequestDto {
  @Expose()
  @IsString()
  path: string;

  @Expose()
  @IsString()
  uid: string;

  @Expose()
  @IsString()
  gid: string;

}*/

import { Expose } from 'class-transformer';
import { IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class FileChownRequestDto {
  @ApiProperty({
    description: 'The file path',
    example: '/var/www/html/index.html',
  })
  @Expose()
  @IsString()
  path: string;

  @ApiProperty({
    description: 'The user ID for ownership change',
    example: '1001',
  })
  @Expose()
  @IsString()
  uid: string;

  @ApiProperty({
    description: 'The group ID for ownership change',
    example: '1001',
  })
  @Expose()
  @IsString()
  gid: string;
}