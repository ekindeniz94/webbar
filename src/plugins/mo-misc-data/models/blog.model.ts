import moment from 'moment';
import { MiscDataTypeEnum } from '../enums';
import { IBlogData } from '../interfaces';
import { MiscData } from './misc-data.model';
import { UserModel } from '../../mo-user';

export class Blog extends MiscData {
  topic: string;
  title: string;
  subtitle: string;
  tags: string[];
  content: string;
  author: UserModel | null;
  authorId: string | null;
  createdAt: string;
  updatedAt: string;
  teaserImage: string;
  published: boolean;

  constructor(data: IBlogData) {
    super(MiscDataTypeEnum.BLOG, data.id);

    this.topic = data.topic;
    this.title = data.title;
    this.subtitle = data.subtitle;
    this.tags = data.tags ?? [];
    this.content = data.content;
    this.author = data.author ? new UserModel(data.author) : null;
    this.authorId = data.authorId;
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
      author: this.author?.getSerialized() ?? null,
      authorId: this.authorId,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt,
      teaserImage: this.teaserImage,
      published: this.published
    };
  }
}
