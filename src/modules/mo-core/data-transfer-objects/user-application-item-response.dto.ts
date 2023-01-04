import { Expose } from 'class-transformer';
import { IsDate, IsString } from 'class-validator';
import { UserApplicationStatusEnum } from '../enums';

export class UserApplicationItemDto {
  @Expose() @IsString() id: string;
  @Expose() @IsString() lastname: string;
  @Expose() @IsString() firstname: string;
  @Expose() @IsString() email: string;
  @Expose() @IsString() interests: string;
  @Expose() @IsString() description: string;
  @Expose() @IsDate() created: Date;
  @Expose() status: UserApplicationStatusEnum;
}
