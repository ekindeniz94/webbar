import { Expose } from 'class-transformer';
import { UserApplicationStatus } from '../enums/user-application-status.enum';

export class CommunityPlanItemDto {
  @Expose() lastname: string;
  @Expose() firstname: string;
  @Expose() email: string;
  @Expose() created: Date;
  @Expose() state: UserApplicationStatus;
  @Expose() serviceCount: number;
  @Expose() activeServices: boolean;
  @Expose() lastLogin: Date;
}
