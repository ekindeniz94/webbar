import { Expose } from 'class-transformer';
import { UserVerificationStatus } from '../enums';

export class UserVerificationStatusDto {
  @Expose() status: UserVerificationStatus;
}
