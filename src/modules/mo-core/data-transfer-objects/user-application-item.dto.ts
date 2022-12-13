import { Expose } from 'class-transformer';
import { UserApplicationStatusEnum } from '../enums';

export class UserApplicationItemDto {
  @Expose() lastname: string;
  @Expose() firstname: string;
  @Expose() email: string;
  @Expose() created: Date;
  @Expose() status: UserApplicationStatusEnum;
  @Expose() serviceCount: number;
  @Expose() activeServices: boolean;
  @Expose() lastLogin: Date;
}
