import moment from 'moment';
import { v4 as uuidv4 } from 'uuid';
import { UserDto } from '../../mo-user';
import { MiscDataTypeEnum } from '../enums';

export const DEFAULT_JOB_DATA: IJobData = {
  id: uuidv4(),
  type: MiscDataTypeEnum.JOB,
  name: '',
  shortName: 'DEV',
  tags: [],
  content: '',
  teaserText: '',
  bgColor: '#009bc5',
  textColor: '#ffffff',
  createdAt: moment().format(),
  updatedAt: moment().format(),
  teaserImage: '',
  published: false,
  seoUrl: '',

  author: undefined,
  authorId: null
};

export interface IJobData {
  id: string;
  type: string;
  name: string;
  seoUrl: string;
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
  authorId: string | null;
}
