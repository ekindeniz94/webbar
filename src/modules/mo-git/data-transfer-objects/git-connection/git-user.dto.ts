import { Expose, Transform } from 'class-transformer';
import { GitConnectionTypeEnum } from '../../enums';

export class GitUserDto {
  @Expose()
  id: string;

  @Expose()
  type: string;

  @Expose()
  email: string;

  @Expose()
  name: string;

  @Expose()
  login: string;

  @Expose()
  avatar_url: string;

  @Expose()
  company: string;

  // ----------------------------------------------------------
  //  ----------------------- Bitbucket -----------------------
  // ----------------------------------------------------------
  @Expose()
  workspace: string;
}
