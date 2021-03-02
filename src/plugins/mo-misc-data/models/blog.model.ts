import moment from 'moment';
import { MiscDataTypeEnum } from '../enums';
import { IAuthorData, IBlogData } from '../interfaces';
import { MiscData } from './misc-data.model';

export class Blog extends MiscData {
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

  constructor(data: IBlogData) {
    super(MiscDataTypeEnum.BLOG);

    this.topic = data.topic;
    this.title = data.title;
    this.subtitle = data.subtitle;
    this.tags = data.tags ?? [];
    this.content = data.content;
    this.author = data.author;
    this.createdAt = data.createdAt ?? moment().format();
    this.updatedAt = data.updatedAt ?? moment().format();
    this.teaserImage = data.teaserImage;
    this.published = data.published;
  }

  public getSerialized(): IBlogData {
    return {
      id: this.id,
      type: this.type,
      topic: this.topic,
      title: this.title,
      subtitle: this.subtitle,
      tags: this.tags,
      content: this.content,
      author: this.author,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt,
      teaserImage: this.teaserImage,
      published: this.published
    };
  }
}
