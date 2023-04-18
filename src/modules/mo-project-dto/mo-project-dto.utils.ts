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
    return value
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
