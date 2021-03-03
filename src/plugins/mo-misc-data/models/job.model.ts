import moment from 'moment';
import { MiscDataTypeEnum } from '../enums';
import { IJobData } from '../interfaces';
import { MiscData } from './misc-data.model';

export class JobModel extends MiscData {
  name: string;
  shortName: string;
  tags: string[];
  content: string;
  teaserText: string;
  bgColor: string;
  createdAt: string;
  updatedAt: string;
  teaserImage: string;
  published: boolean;

  constructor(data: IJobData) {
    super(MiscDataTypeEnum.JOB, data.id);

    this.name = data.name;
    this.shortName = data.shortName;
    this.tags = data.tags ?? [];
    this.content = data.content;
    this.teaserText = data.teaserText;
    this.bgColor = data.bgColor;
    this.createdAt = data.createdAt ?? moment().format();
    this.updatedAt = data.updatedAt ?? moment().format();
    this.teaserImage = data.teaserImage;
    this.published = data.published;
  }

  public getSerialized(): IJobData {
    return {
      id: this.id,
      type: this.type,
      name: this.name,
      shortName: this.shortName,
      tags: this.tags,
      content: this.content,
      teaserText: this.teaserText,
      bgColor: this.bgColor,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt,
      teaserImage: this.teaserImage,
      published: this.published
    };
  }
}
