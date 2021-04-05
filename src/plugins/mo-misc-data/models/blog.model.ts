import moment from 'moment';
import { UserDto } from '../../mo-user';
import { MiscDataTypeEnum } from '../enums';
import { IBlogData, IPublicBlogData } from '../interfaces';
import { MiscDataModel } from './misc-data.model';
import { plainToClass } from 'class-transformer';

export class BlogModel extends MiscDataModel {
  seoUrl: string;
  topic: string;
  title: string;
  teaserText: string;
  tags: string[];
  content: string;
  createdAt: string;
  updatedAt: string;
  teaserImage: string;
  published: boolean;

  author: UserDto | undefined;
  authorId: string | null;

  constructor(data: IBlogData) {
    super(MiscDataTypeEnum.BLOG, data.id);

    this.seoUrl = `${data.title
      .replace(/[^a-zA-Z]/g, ' ')
      .replace(/ +/g, '-')
      .toLowerCase()}`;

    this.topic = data.topic;
    this.title = data.title;
    this.teaserText = data.teaserText;
    this.tags = data.tags ?? [];
    this.content = data.content;
    this.createdAt = data.createdAt ?? moment().format();
    this.updatedAt = data.updatedAt ?? moment().format();
    this.teaserImage = data.teaserImage;
    this.published = data.published;

    this.author = data.author ? plainToClass(UserDto, data.author, { excludeExtraneousValues: true }) : undefined;
    this.authorId = data.authorId;
  }

  public getSerialized(): IBlogData {
    return {
      seoUrl: this.seoUrl,
      id: this.id,
      type: this.type,
      topic: this.topic,
      title: this.title,
      teaserText: this.teaserText,
      tags: this.tags,
      content: this.content,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt,
      teaserImage: this.teaserImage,
      published: this.published,

      author: this.author ?? undefined,
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
      teaserText: this.teaserText,
      tags: this.tags,
      content: this.content,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt,
      teaserImage: this.teaserImage,
      published: this.published,
      author: this.author ?? undefined,
      authorId: this.authorId
    };
  }

  public getPublicSerialized(): IPublicBlogData {
    return {
      seoUrl: this.seoUrl,
      id: this.id,
      topic: this.topic,
      title: this.title,
      teaserText: this.teaserText,
      tags: this.tags,
      content: this.content,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt,
      teaserImage: this.teaserImage,
      published: this.published,
      author: this.author ?? undefined
    };
  }
}
