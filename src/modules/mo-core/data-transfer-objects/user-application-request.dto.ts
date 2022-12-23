import { Expose } from 'class-transformer';
import { IsString, IsOptional, IsNotEmpty } from 'class-validator';

export class UserApplicationDto {
  @Expose() @IsString() @IsOptional() interests: string;
  @Expose() @IsString() @IsNotEmpty() description: string;
}
