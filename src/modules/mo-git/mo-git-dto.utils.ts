import { isNotEmpty, isString } from 'class-validator';

export class MoGitDtoUtils {
  static generateSlug(repoName: string): string {
    if (isNotEmpty(repoName) && isString(repoName)) {
      return repoName
        .toLowerCase()
        .replace(/^-+|-+$/g, '')
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/^-+|-+$/g, '');
    }
    return repoName;
  }
}
