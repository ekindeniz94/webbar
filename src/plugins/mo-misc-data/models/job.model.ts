import moment from 'moment';
import { IUserData, UserModel } from '../../mo-user';
import { MiscDataTypeEnum } from '../enums';
import { IJobData, IPublicJobData } from '../interfaces';
import { MiscDataModel } from './misc-data.model';

export class JobModel extends MiscDataModel {
  seoUrl: string;
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

  author: UserModel | undefined;
  authorId: string | null;

  constructor(data: IJobData) {
    super(MiscDataTypeEnum.JOB, data.id);

    this.seoUrl = `${data.name
      .replace(/[^a-zA-Z]/g, ' ')
      .replace(/ +/g, '-')
      .toLowerCase()}`;

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

    this.author = data.author ? new UserModel(data.author as IUserData) : undefined;
    this.authorId = data.authorId;
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
      published: this.published,

      author: this.author?.getSerialized() ?? undefined,
      authorId: this.authorId
    };
  }

  public getAdimSerialized(): IJobData {
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
      published: this.published,

      author: this.author?.getAdimSerialized() ?? undefined,
      authorId: this.authorId
    };
  }

  public getPublicSerialized(): IPublicJobData {
    return {
      id: this.id,
      name: this.name,
      shortName: this.shortName,
      tags: this.tags,
      content: this.content,
      teaserText: this.teaserText,
      bgColor: this.bgColor,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt,
      teaserImage: this.teaserImage,
      published: this.published,

      author: this.author?.getPublicSerialized() ?? undefined
    };
  }
}
