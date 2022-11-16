import { Expose } from 'class-transformer';
import { GitConnectionTypeEnum } from '../../enums';

export class GitBranchDto {
  @Expose()
  provider: GitConnectionTypeEnum;

  @Expose()
  name: string;
}
