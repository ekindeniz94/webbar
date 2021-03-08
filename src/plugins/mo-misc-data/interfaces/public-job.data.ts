import { IAdminUserData, IPublicUserData, IUserData } from '../../mo-user';

export interface IPublicJobData {
  id: string;
  name: string;
  shortName: string;
  tags: string[];
  teaserText: string;
  bgColor: string;
  content: string;
  createdAt: string;
  updatedAt: string;
  teaserImage: string;
  published: boolean;

  author: IUserData | IAdminUserData | IPublicUserData | undefined;
}
