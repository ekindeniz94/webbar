import { HttpStatusCodeEnum } from '../enums';
import { Expose, Transform } from 'class-transformer';
import { isEnum, IsEnum, IsNotEmpty, IsString, isString } from 'class-validator';

export class ResponseDto {
  @IsNotEmpty()
  @IsEnum(HttpStatusCodeEnum)
  @Transform(({ value }) => (value && isEnum(value, HttpStatusCodeEnum) ? value : HttpStatusCodeEnum.OK))
  @Expose()
  code: HttpStatusCodeEnum;

  @IsNotEmpty()
  @IsString()
  @Transform(({ value }) => (value && isString(value) ? value : ''))
  @Expose()
  message: 'success';
}
