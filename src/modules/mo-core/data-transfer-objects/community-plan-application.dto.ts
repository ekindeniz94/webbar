import { Expose } from 'class-transformer';

export class CommunityPlanApplicationDto {
  @Expose() firstname: string;
  @Expose() lastname: string;
  @Expose() interests: string;
  @Expose() description: string;
}
