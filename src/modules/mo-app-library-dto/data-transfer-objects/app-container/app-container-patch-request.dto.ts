import { AppContainerCreateRequestDto } from './app-container-create-request.dto';
import { IsNotEmpty, IsString, IsUUID } from 'class-validator';
import { Expose } from 'class-transformer';

export class AppContainerPatchRequestDto extends AppContainerCreateRequestDto {
  @IsNotEmpty()
  @IsString()
  @IsUUID()
  @Expose()
  id: string;
}
