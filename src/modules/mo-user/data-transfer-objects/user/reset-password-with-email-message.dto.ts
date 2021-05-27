import { IsString } from 'class-validator';
import { Expose, Transform } from 'class-transformer';
import { MoUtil } from '../../../../utils';

export class ResetPasswordWithEmailMessageDto {
  @IsString()
  @Transform(({ value }) => value ?? MoUtil.nanoid())
  @Expose()
  id: string;

  @IsString()
  @Expose()
  userId: string;
}
