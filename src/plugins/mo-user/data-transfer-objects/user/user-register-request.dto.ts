import { IsEmail, IsNotEmpty, isString, IsString, Matches, MinLength } from 'class-validator';
import { Expose, Transform } from 'class-transformer';

export class UserRegisterRequestDto {
  @IsNotEmpty()
  @IsEmail()
  @Transform(({ value }) => (value && isString(value) ? value.trim() : value))
  @Expose()
  email: string;

  @IsNotEmpty()
  @IsString()
  @MinLength(8)
  @Matches(/^(?=.*[A-Za-z])(?=.*[0-9])(?=.*?[^\w\s]|.*?_|.*?\.).{6,20}$/, {
    message: 'Password error TODO.'
  })
  @Transform(({ value }) => (value && isString(value) ? value.trim() : value))
  @Expose()
  password: string;
}
