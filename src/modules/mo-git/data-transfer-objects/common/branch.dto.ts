import { Expose, plainToInstance } from 'class-transformer';
import { GitConnectionTypeEnum } from '../../enums';

export class GitBranchDto {
  @Expose()
  provider: GitConnectionTypeEnum;

  @Expose()
  name: string;

  @Expose()
  static init(provider: GitConnectionTypeEnum, name: string): GitBranchDto {
    return plainToInstance(
      GitBranchDto,
      {
        provider: provider,
        name: name
      },
      {
        excludeExtraneousValues: true
      }
    );
  }

  constructor(provider: GitConnectionTypeEnum, name: string) {
    this.provider = provider;
    this.name = name;
  }
}
