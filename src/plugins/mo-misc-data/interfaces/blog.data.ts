import moment from 'moment';
import { v4 as uuidv4 } from 'uuid';
import { MiscDataTypeEnum } from '../enums';
import { IAuthorData } from './author.data';

export const DEFAULT_BLOG_DATA: IBlogData = {
  id: uuidv4(),
  type: MiscDataTypeEnum.BLOG,
  topic: '',
  title: '',
  subtitle: '',
  tags: [],
  content: '',
  author: { id: uuidv4(), firstName: '', lastName: '', profileImage: '', email: '' },
  createdAt: moment().format(),
  updatedAt: moment().format(),
  teaserImage: '',
  published: false
};

export interface IBlogData {
  id: string;
  type: string;
  topic: string;
  title: string;
  subtitle: string;
  tags: string[];
  content: string;
  author: IAuthorData;
  createdAt: string;
  updatedAt: string;
  teaserImage: string;
  published: boolean;
}
