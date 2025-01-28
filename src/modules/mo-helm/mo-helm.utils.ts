import { MoUtils } from '@mogenius/js-utils';
import { K8sGetWorkloadRequestDto, K8sResourceEntryDto } from '../mo-kubernetes';
import * as JSYAML from 'js-yaml';

export class MoHelmUtils {
  public static parseManifestResponse(
    manifestString: string,
    resourceList: K8sResourceEntryDto[],
    namespace: string
  ): K8sGetWorkloadRequestDto[] {
    const results: K8sGetWorkloadRequestDto[] = [];
    for (const item of manifestString.split('---')) {
      try {
        const parsed: any = JSYAML.load(item);
        if (!parsed) {
          continue;
        }
        const resource = resourceList.find((r) => r.kind === parsed.kind && r.group === parsed.apiVersion);
        if (!resource) {
          continue;
        }

        namespace = parsed.metadata?.namespace ?? namespace;
        const name = parsed.metadata?.name!;
        const resourceEntity: K8sGetWorkloadRequestDto = MoUtils.transformToDto(K8sGetWorkloadRequestDto, {
          ...resource,
          resourceName: name,
          namespace: namespace
        });

        results.push(resourceEntity);
      } catch (e) {}
    }

    return results;
  }
}
