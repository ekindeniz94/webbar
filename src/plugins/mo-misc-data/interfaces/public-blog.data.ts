import { UserDto } from '../../mo-user';

export interface IPublicBlogData {
  seoUrl: string;
  id: string;
  topic: string;
  title: string;
  teaserText: string;
  tags: string[];
  content: string;
  author: UserDto | undefined;
  createdAt: string;
  updatedAt: string;
  teaserImage: string;
  published: boolean;
}
