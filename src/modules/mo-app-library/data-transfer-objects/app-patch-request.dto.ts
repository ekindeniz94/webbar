import { Expose, Transform, Type } from 'class-transformer';
import { isArray, IsNotEmpty, IsString, IsUUID, ValidateNested } from 'class-validator';
import { AppCreateRequestDto } from './app-create-request.dto';
import { AppPortPatchRequestDto } from './app-port-patch-request.dto';

export class AppPatchRequestDto extends AppCreateRequestDto {
  @IsNotEmpty()
  @IsString()
  @IsUUID()
  @Expose()
  id: string;

  @Type(() => AppPortPatchRequestDto)
  @ValidateNested()
  @Transform(({ value }) => (value && isArray(value) ? value : []))
  @Expose()
  ports: AppPortPatchRequestDto[];
}
