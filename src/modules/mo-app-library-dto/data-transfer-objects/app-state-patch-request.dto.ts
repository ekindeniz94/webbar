import { Expose, Transform } from 'class-transformer';
import { IsEnum, IsNotEmpty, IsString, IsUUID } from 'class-validator';
import { AppLibraryStateEnum } from '../enums';

export class AppStatePatchRequestDto {
  @IsNotEmpty()
  @IsString()
  @IsUUID()
  @Expose()
  id: string;

  @Transform(({ value }) => (value ? value : AppLibraryStateEnum.UNAVAILABLE))
  @IsNotEmpty()
  @IsEnum(AppLibraryStateEnum)
  @Expose()
  state: AppLibraryStateEnum;
}
