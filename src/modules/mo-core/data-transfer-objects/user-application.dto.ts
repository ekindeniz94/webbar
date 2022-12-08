import { Expose } from 'class-transformer';

export class UserApplicationDto {
  @Expose() firstname: string;
  @Expose() lastname: string;
  @Expose() interests: string;
  @Expose() description: string;
}
