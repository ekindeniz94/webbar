import moment from 'moment';
import { v4 as uuidv4 } from 'uuid';
import { MiscDataTypeEnum } from '../enums';
import { UserDto } from '../../mo-user';

export const DEFAULT_BLOG_DATA: IBlogData = {
  seoUrl: '',
  id: uuidv4(),
  type: MiscDataTypeEnum.BLOG,
  topic: '',
  title: '',
  teaserText: '',
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
  teaserText: string;
  tags: string[];
  content: string;
  createdAt: string;
  updatedAt: string;
  teaserImage: string;
  published: boolean;

  author: UserDto | undefined;
  authorId: string | null;
}
