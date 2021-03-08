import moment from 'moment';
import { v4 as uuidv4 } from 'uuid';
import { MiscDataTypeEnum } from '../enums';
import { IAdminUserData, IPublicUserData, IUserData } from '../../mo-user';

export const DEFAULT_JOB_DATA: IJobData = {
  id: uuidv4(),
  type: MiscDataTypeEnum.JOB,
  name: '',
  shortName: 'DEV',
  tags: [],
  content: '',
  teaserText: '',
  bgColor: '#009bc5',
  createdAt: moment().format(),
  updatedAt: moment().format(),
  teaserImage: '',
  published: false,

  author: undefined,
  authorId: null
};

export interface IJobData {
  id: string;
  type: string;
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
  authorId: string | null;
}
