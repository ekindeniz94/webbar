import { Expose } from 'class-transformer';
import { IsNotEmpty, IsOptional, IsString, MinLength } from 'class-validator';

export class UserApplicationDto {
  @Expose() @IsString() @IsOptional() interests: string;
  @Expose() @IsString() @IsNotEmpty() @MinLength(128) description: string;
}
