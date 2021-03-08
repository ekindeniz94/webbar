import moment from 'moment';
import { v4 as uuidv4 } from 'uuid';
import { MiscDataTypeEnum } from '../enums';
import { IPublicUserData } from '../../mo-user';

export const DEFAULT_BLOG_DATA: IBlogData = {
  seoUrl: '',
  id: uuidv4(),
  type: MiscDataTypeEnum.BLOG,
  topic: '',
  title: '',
  subtitle: '',
  tags: [],
  content: '',
  author: undefined,
  authorId: null,
  createdAt: moment().format(),
  updatedAt: moment().format(),
  teaserImage: '',
  published: false
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
  author: IPublicUserData | undefined;
  authorId: string | null;
  createdAt: string;
  updatedAt: string;
  teaserImage: string;
  published: boolean;
}
