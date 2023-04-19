import { Expose, Transform } from 'class-transformer';
import { IsNotEmpty, IsOptional, IsString, isString, IsUUID } from 'class-validator';
import { PROJECT_CONST } from '../../mo-project-dto.const';

export class ProjectNamespacePatchRequestDto {
  @IsNotEmpty()
  @IsString()
  @IsUUID()
  @Expose()
  id: string;

  @IsNotEmpty()
  @IsString()
  @Transform(({ value }) =>
    (value && isString(value) ? value.trim() : value)?.substring(0, PROJECT_CONST.STAGE.DISPLAY_NAME.MAX)
  )
  @Expose()
  displayName: string;

  @IsOptional()
  @IsString()
  @Transform(({ value }) =>
    (value && isString(value) ? value.trim() : value)?.substring(0, PROJECT_CONST.STAGE.DESCRIPTION.MAX)
  )
  @Expose()
  description: string;
}
