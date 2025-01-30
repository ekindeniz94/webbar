import { MoUtils } from '@mogenius/js-utils';
import { K8sGetWorkloadRequestDto, K8sResourceEntryDto } from '../mo-kubernetes';
import * as JSYAML from 'js-yaml';

export class MoHelmUtils {
  public static parseManifestResponse(
    manifestString: string,
    resourceList: K8sResourceEntryDto[],
    namespace: string | undefined
  ): {
    resourceEntry: K8sResourceEntryDto;
    workloadRequest: K8sGetWorkloadRequestDto;
  }[] {
    const results: {
      resourceEntry: K8sResourceEntryDto;
      workloadRequest: K8sGetWorkloadRequestDto;
    }[] = [];
    for (const item of manifestString.split('---')) {
      try {
        const parsed: any = JSYAML.load(item);
        if (!parsed) {
          continue;
        }
        const resourceEntry = resourceList.find((r) => r.kind === parsed.kind && r.group === parsed.apiVersion);
        if (!resourceEntry) {
          continue;
        }

        namespace = parsed.metadata?.namespace ?? namespace;

        if (resourceEntry.namespaced) {
          namespace = undefined;
        }

        const name = parsed.metadata?.name!;
        const workloadRequest: K8sGetWorkloadRequestDto = MoUtils.transformToDto(K8sGetWorkloadRequestDto, {
          ...resourceEntry,
          resourceName: name,
          namespace: namespace
        });

        results.push({
          resourceEntry: resourceEntry,
          workloadRequest: workloadRequest
        });
      } catch (e) {}
    }

    return results;
  }
}
