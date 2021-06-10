import { Expose } from 'class-transformer';
import { NamespaceCommandStateEnum } from '../../enums';
import { IsEnum, IsNotEmpty, IsNumber } from 'class-validator';

export class NamespaceCommandPatchRequestDto {
  @IsNotEmpty()
  @IsEnum(NamespaceCommandStateEnum)
  @Expose()
  state: NamespaceCommandStateEnum;

  @IsNotEmpty()
  @IsNumber()
  @Expose()
  durationMs: number;
}
