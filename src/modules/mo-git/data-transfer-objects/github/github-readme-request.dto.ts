import { IsNotEmpty, IsString } from 'class-validator';
import { Expose } from 'class-transformer';

export class GithubReadmeRequestDto {
  @IsNotEmpty()
  @IsString()
  @Expose()
  cloneUrl: string;

  @IsNotEmpty()
  @IsString()
  @Expose()
  branch: string;
}
