import moment from 'moment';
import { v4 as uuidv4 } from 'uuid';
import { MiscDataTypeEnum } from '../enums';

export const DEFAULT_JOB_DATA: IJobData = {
  id: uuidv4(),
  type: MiscDataTypeEnum.JOB,
  name: '',
  tags: [],
  content: '',
  createdAt: moment().format(),
  updatedAt: moment().format(),
  teaserImage: '',
  published: false
};

export interface IJobData {
  id: string;
  type: string;
  name: string;
  tags: string[];
  content: string;
  createdAt: string;
  updatedAt: string;
  teaserImage: string;
  published: boolean;
}
