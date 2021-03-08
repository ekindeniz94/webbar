import moment from 'moment';
import { MiscDataTypeEnum } from '../enums';
import { IBlogData, IPublicBlogData } from '../interfaces';
import { MiscData } from './misc-data.model';
import { IUserData, UserModel } from '../../mo-user';

export class Blog extends MiscData {
  seoUrl: string;
  topic: string;
  title: string;
  subtitle: string;
  tags: string[];
  content: string;
  createdAt: string;
  updatedAt: string;
  teaserImage: string;
  published: boolean;

  author: UserModel | undefined;
  authorId: string | null;

  constructor(data: IBlogData) {
    super(MiscDataTypeEnum.BLOG, data.id);

    this.seoUrl = `${data.title
      .replace(/[^a-zA-Z]/g, ' ')
      .replace(/ +/g, '-')
      .toLowerCase()}`;

    this.topic = data.topic;
    this.title = data.title;
    this.subtitle = data.subtitle;
    this.tags = data.tags ?? [];
    this.content = data.content;
    this.createdAt = data.createdAt ?? moment().format();
    this.updatedAt = data.updatedAt ?? moment().format();
    this.teaserImage = data.teaserImage;
    this.published = data.published;

    this.author = data.author ? new UserModel(data.author as IUserData) : undefined;
    this.authorId = data.authorId;
  }

  public getSerialized(): IBlogData {
    return {
      seoUrl: this.seoUrl,
      id: this.id,
      type: this.type,
      topic: this.topic,
      title: this.title,
      subtitle: this.subtitle,
      tags: this.tags,
      content: this.content,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt,
      teaserImage: this.teaserImage,
      published: this.published,

      author: this.author?.getSerialized() ?? undefined,
      authorId: this.authorId
    };
  }

  public getAdimSerialized(): IBlogData {
    return {
      seoUrl: this.seoUrl,
      id: this.id,
      type: this.type,
      topic: this.topic,
      title: this.title,
      subtitle: this.subtitle,
      tags: this.tags,
      content: this.content,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt,
      teaserImage: this.teaserImage,
      published: this.published,

      author: this.author?.getAdimSerialized() ?? undefined,
      authorId: this.authorId
    };
  }

  public getPublicSerialized(): IPublicBlogData {
    return {
      seoUrl: this.seoUrl,
      id: this.id,
      topic: this.topic,
      title: this.title,
      subtitle: this.subtitle,
      tags: this.tags,
      content: this.content,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt,
      teaserImage: this.teaserImage,
      published: this.published,

      author: this.author?.getPublicSerialized() ?? undefined
    };
  }
}
