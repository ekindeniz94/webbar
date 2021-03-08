import { IPublicUserData } from '../../mo-user';

export interface IPublicBlogData {
  seoUrl: string;
  id: string;
  topic: string;
  title: string;
  subtitle: string;
  tags: string[];
  content: string;
  author: IPublicUserData | undefined;
  createdAt: string;
  updatedAt: string;
  teaserImage: string;
  published: boolean;
}
