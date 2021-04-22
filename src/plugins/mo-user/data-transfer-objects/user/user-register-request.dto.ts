import { IsEmail, IsNotEmpty, isString, IsString, Matches, MaxLength, MinLength } from 'class-validator';
import { Expose, Transform } from 'class-transformer';

export class UserRegisterRequestDto {
  @IsNotEmpty()
  @IsEmail()
  @MaxLength(320)
  @Transform(({ value }) => (value && isString(value) ? value.trim() : value).substring(0, 320))
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
