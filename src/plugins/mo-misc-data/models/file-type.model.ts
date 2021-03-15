import { IFileTypeData } from '../interfaces';

export class FileType {
  private static availableTypes = [
    new FileType('json', ['json'], 'application/json', ''),
    new FileType('xls', ['xls', 'xla'], 'application/msexcel', 'fa-file-excel'),
    new FileType('doc', ['doc', 'dot'], 'application/mspowerpoint', 'fa-file-word'),
    new FileType(
      'docx',
      ['dox'],
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
      'fa-file-word'
    ),
    new FileType('pdf', ['pdf'], 'application/pdf', 'fa-file-pdf'),
    new FileType('ps', ['ai', 'eps', 'ps'], 'application/postscript'),
    new FileType('rtf', ['rtf'], 'application/rtf'),
    new FileType('zip', ['zip'], 'application/zip', 'fa-file-archive'),
    new FileType('mp3', ['mp3'], 'audio/mpeg', 'fa-file-audio'),
    new FileType('mp4', ['mp4'], 'audio/mp4', 'fa-file-audio'),
    new FileType('wav', ['wav'], 'audio/wav', 'fa-file-audio'),
    new FileType('mp2', ['mp2'], 'audio/x-mpeg', 'fa-file-audio'),
    new FileType('aiff', ['aiff', 'aif', 'aifc'], 'audio/x-aiff', 'fa-file-audio'),
    new FileType('bmp', ['bmp'], 'image/bmp', 'fa-file-image'),
    new FileType('gif', ['gif'], 'image/gif', 'fa-file-image'),
    new FileType('jpeg', ['jpeg', 'jpg', 'jpe'], 'image/jpeg', 'fa-file-image'),
    new FileType('svg', ['svg'], 'image/svg+xml', 'fa-file-image'),
    new FileType('png', ['png'], 'image/png', 'fa-file-image'),
    new FileType('tiff', ['tiff'], 'image/tiff', 'fa-file-image'),
    new FileType('ico', ['ico'], 'image/x-icon', 'fa-file-image'),
    new FileType('csv', ['csv'], 'text/comma-separated-values', 'fa-file-csv'),
    new FileType('css', ['css'], 'text/css'),
    new FileType('html', ['htm', 'html', 'shtml'], 'text/html'),
    new FileType('txt', ['txt'], 'text/plain'),
    new FileType('xml', ['xml'], 'text/xml'),
    new FileType('mpeg', ['mpeg', 'mpg', 'mpe'], 'video/mpeg')
  ];

  constructor(
    readonly name: string,
    readonly extensions: string[],
    readonly mimeType: any,
    readonly icon: string = 'fa-file-alt'
  ) {}

  static fromExtension(ext: string): FileType {
    for (let aType of FileType.availableTypes) {
      if (aType.extensions.includes(ext.toLowerCase())) {
        return aType;
      }
    }
    return new FileType('UNKNOWN', ['UNKNOWN'], 'UNKONWN');
  }

  static allNames(): string[] {
    return FileType.availableTypes.map((type) => type.name);
  }

  static allMimeTypes(): string[] {
    return FileType.availableTypes.map((type) => type.mimeType);
  }

  static allExtensions(): string[] {
    let result: string[] = [];
    for (let aType of FileType.availableTypes) {
      for (let ext of aType.extensions) {
        result.push(ext);
      }
    }
    return result;
  }

  public getSerialized(): IFileTypeData {
    return {
      name: this.name,
      extensions: this.extensions,
      mimeType: this.mimeType,
      icon: this.icon
    };
  }

  public isResizableImage(): boolean {
    return this.icon === 'fa-file-image' && this.name !== 'svg';
  }
}
