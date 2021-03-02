import moment from 'moment';
import { MiscDataTypeEnum } from '../enums';
import { IJobData } from '../interfaces';
import { MiscData } from './misc-data.model';

export class JobModel extends MiscData {
  name: string;
  tags: string[];
  content: string;
  createdAt: string;
  updatedAt: string;
  teaserImage: string;
  published: boolean;

  constructor(data: IJobData) {
    super(MiscDataTypeEnum.BLOG);

    this.name = data.name;
    this.tags = data.tags ?? [];
    this.content = data.content;
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
      tags: this.tags,
      content: this.content,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt,
      teaserImage: this.teaserImage,
      published: this.published
    };
  }
}
