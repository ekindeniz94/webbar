import { MoUtils } from '@mo/js-utils';
import { PROJECT_CONST } from './mo-project-dto.const';
import { BuildTaskItemDto } from './data-transfer-objects/cicd/build-task-item.dto';
import { plainToInstance } from 'class-transformer';
import { BuildJobInfosPayloadDto } from '../mo-product-dto';

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
      .toLowerCase()
      .replace(/[^a-z0-9-]/g, '-')
      .replace(/^-+/, '')
      .replace(/^[0-9]/, (p) => numberToWord[p])
      .replace(/ +/g, '-')
      .replace(/[(-)\1+]/g, '-')
      .substring(0, maxLength)
      .split('-')
      .filter((item) => item && item.length > 0)
      .join('-');
  }

  public static createBuildTaskItemList(
    buildInfo: BuildJobInfosPayloadDto,
    allowedBuildTasks: string[] = ['clone', 'ls', 'build', 'push']
  ): BuildTaskItemDto[] {
    const results: BuildTaskItemDto[] = [];
    for (const allowedBuildTask of allowedBuildTasks) {
      let buildTaskState = 'PENDING';
      let projectId = '';
      let namespace = '';
      let controller = '';
      let container = '';
      if (buildInfo.hasOwnProperty(allowedBuildTask)) {
        // @ts-ignore
        projectId = buildInfo[allowedBuildTask].projectId;
        // @ts-ignore
        namespace = buildInfo[allowedBuildTask].namespace;
        // @ts-ignore
        controller = buildInfo[allowedBuildTask].controller;
        // @ts-ignore
        container = buildInfo[allowedBuildTask].container;
        // @ts-ignore
        buildTaskState = buildInfo[allowedBuildTask].state;
      }
      results.push(
        plainToInstance(
          BuildTaskItemDto,
          {
            projectId: projectId,
            namespace: namespace,
            controller: controller,
            container: container,
            buildId: buildInfo.buildId,
            buildTask: allowedBuildTask,
            buildTaskState: buildTaskState
            // data: lastBuildInfo[allowedBuildTask]
          },
          { excludeExtraneousValues: true }
        )
      );
    }
    return results;
  }
}
