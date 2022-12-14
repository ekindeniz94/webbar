import { Expose } from 'class-transformer';
import { IsBoolean, IsDate, IsNumber, IsString } from 'class-validator';
import { UserApplicationStatusEnum } from '../enums';

export class UserApplicationItemDto {
  @Expose() @IsString() lastname: string;
  @Expose() @IsString() firstname: string;
  @Expose() @IsString() email: string;
  @Expose() @IsDate() created: Date;
  @Expose() status: UserApplicationStatusEnum;
  @Expose() @IsNumber() serviceCount: number;
  @Expose() @IsBoolean() activeServices: boolean;
  @Expose() @IsDate() lastLogin: Date;
}
