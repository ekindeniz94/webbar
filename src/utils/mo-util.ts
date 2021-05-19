import { customAlphabet } from 'nanoid';

export class MoUtil {
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
}
