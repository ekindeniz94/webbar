import { NamespaceDto, NamespaceServiceDto, NamespaceStageDto } from './data-transfer-objects';

export class MoNamespaceUtils {
  static fullHostname(namespace: NamespaceDto, stage?: NamespaceStageDto, serice?: NamespaceServiceDto): string {
    // if (
    //   this.hostname &&
    //   this.hostname.length > 0 &&
    //   this.domain &&
    //   this.domain?.length > 0 &&
    //   this.shortId &&
    //   this.shortId?.length > 0
    // ) {
    //   return `${this.hostname}-${stage.subdomain}-${this.shortId}.${this.domain}`;
    // }
    return '__MISSING_DATA__';
  }
}
