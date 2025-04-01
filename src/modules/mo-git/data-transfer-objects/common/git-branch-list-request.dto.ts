import { IsNotEmpty, IsString } from 'class-validator';
import { Expose } from 'class-transformer';

export class GitBranchListRequestDto {
  @IsNotEmpty()
  @IsString()
  @Expose()
  cloneUrl: string;
}
