import { Expose } from 'class-transformer';
import { IsString, IsOptional, IsNotEmpty, MinLength } from 'class-validator';

export class UserApplicationDto {
  @Expose() @IsString() @IsOptional() interests: string;
  @Expose() @IsString() @IsNotEmpty() @MinLength(128) description: string;
}
