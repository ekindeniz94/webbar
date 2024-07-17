import { Expose, Type } from 'class-transformer';
import { IsNotEmpty, IsString } from 'class-validator';

export class ProjectNamespaceServiceListCronjobJobsItemStatusMessageDto {
  @IsNotEmpty()
  @IsString()
  @Type(() => String)
  @Expose()
  reason: string;

  @IsNotEmpty()
  @IsString()
  @Type(() => String)
  @Expose()
  message: string;
}
