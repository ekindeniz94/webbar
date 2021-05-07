import { isString } from 'class-validator';
import { Expose, Transform } from 'class-transformer';

export class UserPublicDto {
  @Expose()
  id: string;

  @Transform(({ value, obj }) => (obj.lastName || obj.firstName ? '' : value))
  @Expose()
  email: string;

  @Expose()
  firstName: string;

  @Expose()
  lastName: string;

  get displayName(): string {
    if ((this.firstName && this.firstName.length > 0) || (this.lastName && this.lastName?.length > 0)) {
      return [`${this.firstName}`, `${this.lastName}`]
        .filter((item: string) => !!item && item.length > 0 && isString(item) && item !== 'undefined')
        .join(' ');
    }
    return this.email ?? this.id;
  }
}
