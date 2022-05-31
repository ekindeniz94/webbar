import { customAlphabet } from 'nanoid';
import { isArray, isObject } from 'class-validator';
import * as _ from 'lodash';
import { instanceToPlain } from 'class-transformer';

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

  static difference(
    obj1: Record<string, any>,
    obj2: Record<string, any>,
    keyStr?: string,
    keyArr: any[] = []
  ): any {
    obj1 = instanceToPlain(obj1);
    obj2 = instanceToPlain(obj2);
    if (isArray(obj1)) {
      return obj1
        .map((key: any, index: number) => {
          return MoUtils.difference(obj1[key], obj2[key], `${index}`, keyArr);
        })
        .filter((item: any) => !!item && Object.keys(item).length > 0)
        .flat();
    }
    if (isObject(obj1)) {
      return Object.keys(obj1)
        .map((key: string) => {
          if (isObject((obj1 as any)[key])) {
            keyArr.push(key);
          }
          return MoUtils.difference((obj1 as any)[key], obj2[key], `${key}`, keyArr);
        })
        .filter((item: any) => !!item && Object.keys(item).length > 0)
        .flat();
    }
    if (keyStr?.indexOf('createdAt') === -1 && keyStr?.indexOf('updatedAt') === -1 && !_.isEqual(obj1, obj2)) {
      const result: any = {};
      result[`${[...keyArr, keyStr].join('.')}`] = {
        prev: `${obj1}`,
        next: `${obj2}`
      };
      return result;
    }
    return {};
  }
}
