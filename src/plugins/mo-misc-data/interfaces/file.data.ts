import moment from 'moment';
import { v4 as uuidv4 } from 'uuid';
import { MiscDataTypeEnum } from '../enums';
import { FileType } from '../models';
import { IFileTypeData } from './file-type.data';

export const DEFAULT_FILE_DATA: IFileData = {
  id: uuidv4(),
  type: MiscDataTypeEnum.FILE,
  fileName: 'string',
  fileType: new FileType('UNKNOWN', ['UNKNOWN'], 'UNKONWN').getSerialized(),
  sizeInBytes: 0,
  uploadedByUser: '',
  createdAt: moment().format(),
  updatedAt: moment().format(),
  locationOnDisk: '',
  alt: ''
};

export interface IFileData {
  id: string;
  type: string;
  fileName: string;
  fileType: IFileTypeData;
  sizeInBytes: number;
  uploadedByUser: string;
  createdAt: string;
  updatedAt: string;
  locationOnDisk: string;
  alt: string;
}
