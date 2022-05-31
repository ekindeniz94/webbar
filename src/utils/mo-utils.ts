import { customAlphabet } from 'nanoid';

export class MoUtils {
  /**
   *
   * @param {string} str
   * @return {string}
   */
  public static cleanUpUrl(str: string): string {
    return str.replace(/([^:]\/)\/+/g, '$1');
  }

  public static get nanoid(): () => string {
    const alphabet = '0123456789abcdefghijklmnopqrstuvwxyz';
    // Speed: 1000IDs per hour/second
    // ~4 million years needed, in order to have a 1% probability of at least one collision.
    return customAlphabet(alphabet, 23);
  }

  public static get nanoidSuperShort(): () => string {
    const alphabet = '0123456789abcdefghijklmnopqrstuvwxyz';
    // Speed: 1000IDs per hour/second
    // ~7 hours needed, in order to have a 1% probability of at least one collision.
    return customAlphabet(alphabet, 6);
  }

  /**
   *
   * @param {number} time
   * @return {Promise<void>}
   */
  static delay(time: number = 5000): Promise<void> {
    return new Promise((resolve) => setTimeout(resolve, time));
  }

  static generatePassword(
    length: number = 20,
    characters: string = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz~!@-#$'
  ): string {
    return Array(length)
      .fill(0)
      .map(() => characters.charAt(Math.floor(Math.random() * characters.length)))
      .join('');
  }

  static strEnum<T extends string>(strArr: Array<T>): { [K in T]: K } {
    return strArr.reduce((res, key) => {
      res[key] = key;
      return res;
    }, Object.create(null));
  }
}
