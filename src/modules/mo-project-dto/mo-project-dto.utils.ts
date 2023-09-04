import { MoUtils } from '@mo/js-utils';
import { PROJECT_CONST } from './mo-project-dto.const';

export class MoProjectDtoUtils {
  static generateK8sName(value: string): string {
    const nanoidSuperShort: string = MoUtils.nanoidSuperShort();
    value = MoProjectDtoUtils.k8sName(value, PROJECT_CONST.K8S_NAME.MAX - nanoidSuperShort.length - 1);
    return `${value}-${nanoidSuperShort}`;
  }

  static k8sName(value: string, maxLength: number = PROJECT_CONST.K8S_NAME.MAX): string {
    if (!value) {
      return value;
    }
    const numberToWord: { [key: string]: string } = {
      '0': 'zero',
      '1': 'one',
      '2': 'two',
      '3': 'three',
      '4': 'four',
      '5': 'five',
      '6': 'six',
      '7': 'seven',
      '8': 'eight',
      '9': 'nine'
    };
    return value
      .replace(/^([0-9])/, (match) => numberToWord[match] || match)
      .toLowerCase()
      .replace(/[^a-z0-9-]/g, '-')
      .replace(/ +/g, '-')
      .replace(/[(-)\1+]/g, '-')
      .substring(0, maxLength)
      .split('-')
      .filter((item) => item && item.length > 0)
      .join('-');
  }
}
