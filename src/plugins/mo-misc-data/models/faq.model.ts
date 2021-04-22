import moment from 'moment';
import { MiscDataTypeEnum } from '../enums';
import { IFaqData } from '../interfaces/faq.data';
import { MiscDataModel } from './misc-data.model';

export class FaqModel extends MiscDataModel {
  tags: string[];
  seoUrl: string;
  sector: string;
  title: string;
  content: string;
  createdAt: string;
  updatedAt: string;
  published: boolean;

  constructor(data: IFaqData) {
    super(MiscDataTypeEnum.FAQ, data.id);

    this.seoUrl = `${data.title
      ?.replace(/[^a-zA-Z]/g, ' ')
      ?.replace(/ +/g, '-')
      .toLowerCase()}`;

    this.tags = data.tags;
    this.sector = data.sector;
    this.tags = data.tags ?? [];
    this.content = data.content;
    this.title = data.title;
    this.createdAt = data.createdAt ?? moment().format();
    this.updatedAt = data.updatedAt ?? moment().format();
    this.published = data.published;
  }

  public getSerialized(): IFaqData {
    return {
      id: this.id,
      type: this.type,
      tags: this.tags,
      seoUrl: this.seoUrl,
      sector: this.sector,
      title: this.title,
      content: this.content,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt,
      published: this.published
    };
  }
}
