import { Expose, Transform, Type } from 'class-transformer';
import {
  ProjectNamespaceServiceStatusController,
  ProjectNamespaceServiceStatusKind,
  ProjectNamespaceServiceStatusKindType
} from './project-namespace-service-status.enum';
import { cloneDeep } from 'lodash';
import { ProjectNamespaceServiceStatusResourceItemDto } from './project-namespace-service-status-item.dto';
import { isArray } from 'class-validator';

export class ProjectNamespaceServiceStatusResourceDto {
  @Expose()
  get switchedOn(): boolean {
    switch (true) {
      case this.hasDeployment: {
        const status = this.getItemsOfType(ProjectNamespaceServiceStatusController.Deployment).pop()?.status();
        return status.replicas !== 0;
      }
      case this.hasCronJob: {
        const status = this.getItemsOfType(ProjectNamespaceServiceStatusController.Deployment).pop()?.status();
        // @todo
      }
    }
    return false;
  }

  @Expose()
  get hasPods(): boolean {
    return this.getItemsOfType(ProjectNamespaceServiceStatusKind.Pod).length > 0;
  }

  @Expose()
  get hasContainers(): boolean {
    return this.getItemsOfType(ProjectNamespaceServiceStatusKind.Container).length > 0;
  }

  @Expose()
  get hasDeployment(): boolean {
    return this.getItemsOfType(ProjectNamespaceServiceStatusController.Deployment).length > 0;
  }

  @Expose()
  get hasJob(): boolean {
    return this.getItemsOfType(ProjectNamespaceServiceStatusController.Job).length > 0;
  }

  @Expose()
  get hasCronJob(): boolean {
    return this.getItemsOfType(ProjectNamespaceServiceStatusController.CronJob).length > 0;
  }

  @Expose()
  get hasBuild(): boolean {
    return this.getItemsOfType(ProjectNamespaceServiceStatusKind.BuildJob).length > 0;
  }

  @Expose()
  @Type(() => ProjectNamespaceServiceStatusResourceItemDto)
  @Transform(({ value }) => (value && isArray(value) ? value : []))
  items: ProjectNamespaceServiceStatusResourceItemDto[];

  public getRootNodes(): ProjectNamespaceServiceStatusResourceItemDto[] {
    const resources: ProjectNamespaceServiceStatusResourceItemDto[] = [];
    for (const item of this.items || []) {
      if (item.ownerName === undefined) {
        resources.push(cloneDeep(item));
      }
    }

    return resources;
  }

  public getParent(
    forItem: ProjectNamespaceServiceStatusResourceItemDto
  ): ProjectNamespaceServiceStatusResourceItemDto | undefined {
    for (const item of this.items) {
      if (item.name == forItem.ownerName) {
        return cloneDeep(item);
      }
    }

    return undefined;
  }

  public getNextItems(
    forItem: ProjectNamespaceServiceStatusResourceItemDto
  ): ProjectNamespaceServiceStatusResourceItemDto[] {
    const next: ProjectNamespaceServiceStatusResourceItemDto[] = [];
    for (const item of this.items) {
      if (item.ownerName == forItem.name) {
        next.push(cloneDeep(item));
      }
    }

    return next;
  }

  public getItemsOfType(kind: ProjectNamespaceServiceStatusKindType): ProjectNamespaceServiceStatusResourceItemDto[] {
    const resources: ProjectNamespaceServiceStatusResourceItemDto[] = [];
    for (const item of this.items || []) {
      if (item.kind === kind) {
        resources.push(cloneDeep(item));
      }
    }

    return resources;
  }

  public hash(
    hashCallback: (stringified: string) => string = (stringified) => {
      return stringified;
    }
  ): string {
    //
    let hash = '';
    const order = [ProjectNamespaceServiceStatusKind.BuildJob, undefined];
    const roots = this.getRootNodes();
    const compareByAttributes = (
      a: ProjectNamespaceServiceStatusResourceItemDto,
      b: ProjectNamespaceServiceStatusResourceItemDto,
      attributes: string[]
    ): number => {
      let aa: any, bb: any;
      attributes.forEach((key) => {
        aa += (a as any)[key];
        bb += (b as any)[key];
      });

      if (aa < bb) {
        return -1; // a comes first
      }
      if (aa > bb) {
        return 1; // b comes first
      }
      return 0; // no change in order
    };
    const sorted = this.items.sort((a, b) => compareByAttributes(a, b, ['name', 'kind']));
    const noHash = (stringified: string): string => {
      return stringified;
    };

    hashCallback = hashCallback ?? noHash;

    const stableStringify = (obj: any): string => {
      if (typeof obj === 'object' && obj !== null) {
        if (Array.isArray(obj)) {
          return '[' + obj.map(stableStringify).join(',') + ']';
        } else {
          return (
            '{' +
            Object.keys(obj)
              .sort()
              .map((key) => {
                return JSON.stringify(key) + ':' + stableStringify(obj[key]);
              })
              .join(',') +
            '}'
          );
        }
      } else {
        return JSON.stringify(obj);
      }
    };

    const traverse = (node: ProjectNamespaceServiceStatusResourceItemDto): string => {
      let hash = hashCallback(stableStringify(node));

      for (const next of sorted) {
        if (node.name === next.ownerName && node.kind === next.ownerKind) {
          hash = hashCallback(`${hash}${traverse(next)}`);
        }
      }

      return hash;
    };

    for (const key of order) {
      let root: ProjectNamespaceServiceStatusResourceItemDto | undefined;
      if (key === undefined) {
        root = roots.find((root) => root.kind !== ProjectNamespaceServiceStatusKind.BuildJob);
      } else {
        root = roots.find((root) => root.kind === key);
      }

      if (root !== undefined) {
        hash = hashCallback(`${hash}${traverse(root)}`);
      }
    }

    return hash;
  }
}
