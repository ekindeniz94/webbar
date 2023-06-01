import { Expose } from 'class-transformer';
import { KubernetesEventKindEnum } from '../enums';

export class KubernetesEventInvolvedObjectDto {
  // private _namespaceShortId: string;
  // private _namespaceStageShortId: string;
  // private _namespaceName: string;
  // private _namespaceServiceShortId: string;

  @Expose()
  kind: KubernetesEventKindEnum;

  // ticket-794-prod-evfdce-4mdz6a
  @Expose()
  namespace: string;

  // nginx-test-2-pxqksj-67d7c6dd8c-rcrrc
  @Expose()
  name: string;

  @Expose()
  uid: string;

  @Expose()
  apiVersion: string;

  @Expose()
  resourceVersion: string;

  @Expose()
  fieldPath: string;

  get projectNamespaceServiceName(): string | null {
    if (this.namespace && this.kind === KubernetesEventKindEnum.Pod) {
      const metaNameArr = this.name.split('-');
      metaNameArr.pop();
      metaNameArr.pop();

      return metaNameArr.join('-');
    }
    return null;
  }

  get projectNamespaceName(): string | null {
    if (this.namespace) {
      return this.namespace;
    }
    return null;
  }

  // private init(): void {
  //   if (!this.namespace) {
  //     return;
  //   }
  //   let metaNamespaceArr = this.namespace.split('-');
  //   this._namespaceShortId = metaNamespaceArr[metaNamespaceArr.length - 2];
  //   this._namespaceStageShortId = metaNamespaceArr[metaNamespaceArr.length - 1];
  //
  //   metaNamespaceArr = metaNamespaceArr
  //     .filter((item: string) => item !== this._namespaceShortId)
  //     .filter((item: string) => item !== this._namespaceStageShortId);
  //
  //   metaNamespaceArr.pop();
  //   this._namespaceName = metaNamespaceArr.join('-');
  //
  //   if (this.kind === KubernetesEventKindEnum.Pod) {
  //     const metaNameArr = this.name.split('-');
  //     metaNameArr.pop();
  //     metaNameArr.pop();
  //     this._namespaceServiceShortId = metaNameArr[metaNameArr.length - 1];
  //   } else if (this.kind === KubernetesEventKindEnum.Deployment) {
  //     let nameArr = this.name.split('-');
  //     this._namespaceServiceShortId = nameArr[nameArr.length - 1];
  //   } else if (this.kind === KubernetesEventKindEnum.ReplicaSet) {
  //     let nameArr = this.name.split('-');
  //     this._namespaceServiceShortId = nameArr[nameArr.length - 2];
  //   }
  // }
  //
  // get namespaceName(): string {
  //   if (!this._namespaceName) {
  //     this.init();
  //   }
  //   return this._namespaceName;
  // }
  //
  // get namespaceShortId(): string {
  //   if (!this._namespaceShortId) {
  //     this.init();
  //   }
  //   return this._namespaceShortId;
  // }
  //
  // get namespaceStageShortId(): string {
  //   if (!this._namespaceStageShortId) {
  //     this.init();
  //   }
  //   return this._namespaceStageShortId;
  // }
  //
  // get namespaceServiceShortId(): string {
  //   if (!this._namespaceServiceShortId) {
  //     this.init();
  //   }
  //   return this._namespaceServiceShortId;
  // }
}
