import { UserDto } from '../../mo-user';

export interface IPublicJobData {
  id: string;
  name: string;
  shortName: string;
  tags: string[];
  teaserText: string;
  bgColor: string;
  textColor: string;
  content: string;
  createdAt: string;
  updatedAt: string;
  teaserImage: string;
  published: boolean;

  author: UserDto | undefined;
}
