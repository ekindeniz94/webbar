import { Expose } from 'class-transformer';
import { IsNotEmpty, IsString } from 'class-validator';

export class GitTagRefItemDto {
  @IsNotEmpty()
  @IsString()
  @Expose()
  ref: string;

  get name(): string {
    return this.ref.replace('refs/tags/', '');
  }
}
