import { IsString } from 'class-validator';
import { Expose, Transform } from 'class-transformer';
import { MoUtils } from '../../../../utils';

export class EmailConfirmationMessageDto {
  @IsString()
  @Transform(({ value }) => value ?? MoUtils.nanoid())
  @Expose()
  id: string;

  @IsString()
  @Expose()
  userId: string;
}
