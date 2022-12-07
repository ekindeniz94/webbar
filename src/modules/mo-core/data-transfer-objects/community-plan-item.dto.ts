import { Expose } from 'class-transformer';
import { CommunityPlanStatus } from '../enums/community-plan-status.enum';

export class CommunityPlanItemDto {
  @Expose() lastname: string;
  @Expose() firstname: string;
  @Expose() email: string;
  @Expose() created: Date;
  @Expose() state: CommunityPlanStatus;
  @Expose() serviceCount: number;
  @Expose() activeServices: boolean;
  @Expose() lastLogin: Date;
}
