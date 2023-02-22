import { IsOptional } from 'class-validator';
import { Expose, Type } from 'class-transformer';
import { GroupDto, UserPublicDto } from '@mo/user-dto';

export class NamespaceUserDto {
  @IsOptional()
  @Type(() => UserPublicDto)
  @Expose()
  user: UserPublicDto;

  @IsOptional()
  @Type(() => GroupDto)
  @Expose()
  group: GroupDto;
}
