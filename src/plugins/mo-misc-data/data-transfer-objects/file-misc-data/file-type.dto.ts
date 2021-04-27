import { Expose } from 'class-transformer';

export class FileTypeDto {
  @Expose()
  extension: string;

  @Expose()
  mimeType: string;

  get isImage(): boolean {
    return this.mimeType.indexOf('image/') !== -1;
  }

  get icon(): string {
    if (this.mimeType.indexOf('image/') !== -1) {
      return 'fa-image';
    }
    if (this.mimeType.indexOf('application/pdf') !== -1) {
      return 'fa-file-pdf';
    }
    return 'fa-file';
  }
}
