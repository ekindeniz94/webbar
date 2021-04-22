import { isString } from 'class-validator';
import { Expose } from 'class-transformer';

export class UserPublicDto {
  @Expose()
  id: string;

  @Expose()
  email: string;

  @Expose()
  firstName: string;

  @Expose()
  lastName: string;

  get displayName(): string {
    if ((this.firstName && this.firstName.length > 0) || (this.lastName && this.lastName?.length > 0)) {
      return [this.firstName, this.lastName]
        .filter((item: string) => item && item.length > 0 && isString(item))
        .join(' ');
    }
    return this.email ?? this.id;
  }
}
