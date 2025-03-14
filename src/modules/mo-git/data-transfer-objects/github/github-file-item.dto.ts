import { Expose } from 'class-transformer';

export class GithubFileItemDto {
  // 'release.yaml'
  @Expose()
  name: string;

  // '.github/workflows/release.yaml',
  @Expose()
  path: string;

  @Expose()
  sha: string;

  @Expose()
  size: number;

  // 'https://api.github.com/repos/mogenius/mo-pipeline-example/contents/.github/workflows/release.yaml?ref=main',
  @Expose()
  url: string;

  // 'https://github.com/mogenius/mo-pipeline-example/blob/main/.github/workflows/release.yaml',
  @Expose()
  html_url: string;

  // 'https://api.github.com/repos/mogenius/mo-pipeline-example/git/blobs/feae3f429d393153f165be0aa66bf0d5e0e78724',
  @Expose()
  git_url: string;

  // 'https://raw.githubusercontent.com/mogenius/mo-pipeline-example/main/.github/workflows/release.yaml?token=AVUXB74PPM2QWWIOR35OYWDH2IJOO'
  @Expose()
  download_url: string;

  // file,....
  @Expose()
  type: string;

  // @Expose()
  // _links: {
  //   self: 'https://api.github.com/repos/mogenius/mo-pipeline-example/contents/.github/workflows/release.yaml?ref=main',
  //   git: 'https://api.github.com/repos/mogenius/mo-pipeline-example/git/blobs/feae3f429d393153f165be0aa66bf0d5e0e78724',
  //   html: 'https://github.com/mogenius/mo-pipeline-example/blob/main/.github/workflows/release.yaml'
  // }
}
