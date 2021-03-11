import moment from 'moment';
import { v4 as uuidv4 } from 'uuid';
import { MiscDataTypeEnum } from '../enums';

export const DEFAULT_JOB_DATA: IFaqData = {
  id: uuidv4(),
  type: MiscDataTypeEnum.FAQ,
  tags: [],
  seoUrl: '',
  sector: '',
  title: '',
  content: '',
  createdAt: moment().format(),
  updatedAt: moment().format(),
  published: false
};

export interface IFaqData {
  id: string;
  type: string;
  tags: string[];
  seoUrl: string;
  sector: string;
  title: string;
  content: string;
  createdAt: string;
  updatedAt: string;
  published: boolean;
}
