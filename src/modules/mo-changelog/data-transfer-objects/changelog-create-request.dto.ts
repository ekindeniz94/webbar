import { Expose } from 'class-transformer';
import { IsString } from 'class-validator';
import { BaseEntityDto } from '../../mo-core';

export class ChangelogCreateRequestDto extends BaseEntityDto {
  @IsString()
  @Expose()
  version: string;

  @IsString()
  @Expose()
  title: String;

  @IsString()
  @Expose()
  logText: String;
}
