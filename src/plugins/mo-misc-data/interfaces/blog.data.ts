import moment from 'moment';
import { v4 as uuidv4 } from 'uuid';
import { MiscDataTypeEnum } from '../enums';
import { IPublicUserData, IUserData } from '../../mo-user';
import { IAdminUserData } from '../../mo-user/interfaces/admin-user.data';

export const DEFAULT_BLOG_DATA: IBlogData = {
  seoUrl: '',
  id: uuidv4(),
  type: MiscDataTypeEnum.BLOG,
  topic: '',
  title: '',
  subtitle: '',
  tags: [],
  content: '',
  createdAt: moment().format(),
  updatedAt: moment().format(),
  teaserImage: '',
  published: false,

  author: undefined,
  authorId: null
};

export interface IBlogData {
  seoUrl: string;
  id: string;
  type: string;
  topic: string;
  title: string;
  subtitle: string;
  tags: string[];
  content: string;
  createdAt: string;
  updatedAt: string;
  teaserImage: string;
  published: boolean;

  author: IUserData | IAdminUserData | IPublicUserData | undefined;
  authorId: string | null;
}
