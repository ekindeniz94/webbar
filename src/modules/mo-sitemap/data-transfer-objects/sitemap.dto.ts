import { Expose } from 'class-transformer';
import moment from 'moment';
import { BaseEntityDto } from '../../mo-core';
import { SitemapFrequencyEnum } from './../enums';

export class SitemapDto extends BaseEntityDto {
  @Expose()
  contentId: string;

  @Expose()
  loc: string;

  @Expose()
  lastmod: Date;

  @Expose()
  changefreq: SitemapFrequencyEnum;

  @Expose()
  priority: number;

  get toXml(): string {
    return `<url>
      <loc>${this.loc}</loc>
      <lastmod>${moment(this.lastmod).format('YYYY-MM-DD')}</lastmod>
      <changefreq>${this.changefreq}</changefreq>
      <priority>${this.priority}</priority>
    </url>`;
  }
}
