import moment from 'moment';
import { MiscDataTypeEnum } from '../enums';
import { IFileData } from '../interfaces';
import { FileType } from './file-type.model';
import { MiscData } from './misc-data.model';

export class FileModel extends MiscData {
  fileName: string;
  fileType: FileType;
  sizeInBytes: number;
  uploadedByUser: string;
  createdAt: string;
  updatedAt: string;
  locationOnDisk: string;
  alt: string;

  constructor(data: IFileData) {
    super(MiscDataTypeEnum.FILE, data.id);

    this.fileName = data.fileName;
    this.fileType = new FileType(
      data.fileType.name,
      data.fileType.extensions,
      data.fileType.mimeType,
      data.fileType.icon
    );
    this.sizeInBytes = data.sizeInBytes;
    this.uploadedByUser = data.uploadedByUser;
    this.locationOnDisk = data.locationOnDisk;
    this.alt = data.alt;
    this.createdAt = data.createdAt ?? moment().format();
    this.updatedAt = data.updatedAt ?? moment().format();
  }

  public getSerialized(): IFileData {
    return {
      id: this.id,
      type: this.type,
      fileName: this.fileName,
      fileType: this.fileType.getSerialized(),
      sizeInBytes: this.sizeInBytes,
      uploadedByUser: this.uploadedByUser,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt,
      locationOnDisk: this.locationOnDisk,
      alt: this.alt
    };
  }
}
