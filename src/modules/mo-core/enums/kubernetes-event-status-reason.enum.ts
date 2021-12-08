export enum KubernetesEventStatusReasonEnum {
  // Container event reason list
  CreatedContainer = 'Created',
  StartedContainer = 'Started',
  FailedToCreateContainer = 'Failed',
  FailedToStartContainer = 'Failed',
  KillingContainer = 'Killing',
  PreemptContainer = 'Preempting',
  BackOffStartContainer = 'BackOff',
  ExceededGracePeriod = 'ExceededGracePeriod',

  // Pod event reason list
  FailedToKillPod = 'FailedKillPod',
  FailedToCreatePodContainer = 'FailedCreatePodContainer',
  FailedToMakePodDataDirectories = 'Failed',
  NetworkNotReady = 'NetworkNotReady',

  // Image event reason list
  PullingImage = 'Pulling',
  PulledImage = 'Pulled',
  FailedToPullImage = 'Failed',
  FailedToInspectImage = 'InspectFailed',
  ErrImageNeverPullPolicy = 'ErrImageNeverPull',
  BackOffPullImage = 'BackOff',

  // kubelet event reason list
  NodeReady = 'NodeReady',
  NodeNotReady = 'NodeNotReady',
  NodeSchedulable = 'NodeSchedulable',
  NodeNotSchedulable = 'NodeNotSchedulable',
  StartingKubelet = 'Starting',
  KubeletSetupFailed = 'KubeletSetupFailed',
  FailedAttachVolume = 'FailedAttachVolume',
  FailedMountVolume = 'FailedMount',
  VolumeResizeFailed = 'VolumeResizeFailed',
  VolumeResizeSuccess = 'VolumeResizeSuccessful',
  FileSystemResizeFailed = 'FileSystemResizeFailed',
  FileSystemResizeSuccess = 'FileSystemResizeSuccessful',
  FailedMapVolume = 'FailedMapVolume',
  WarnAlreadyMountedVolume = 'AlreadyMountedVolume',
  SuccessfulAttachVolume = 'SuccessfulAttachVolume',
  SuccessfulMountVolume = 'SuccessfulMountVolume',
  NodeRebooted = 'Rebooted',
  NodeShutdown = 'Shutdown',
  ContainerGCFailed = 'ContainerGCFailed',
  ImageGCFailed = 'ImageGCFailed',
  FailedNodeAllocatableEnforcement = 'FailedNodeAllocatableEnforcement',
  SuccessfulNodeAllocatableEnforcement = 'NodeAllocatableEnforced',
  SandboxChanged = 'SandboxChanged',
  FailedCreatePodSandBox = 'FailedCreatePodSandBox',
  FailedStatusPodSandBox = 'FailedPodSandBoxStatus',
  FailedMountOnFilesystemMismatch = 'FailedMountOnFilesystemMismatch',

  // Image manager event reason list
  InvalidDiskCapacity = 'InvalidDiskCapacity',
  FreeDiskSpaceFailed = 'FreeDiskSpaceFailed',

  // Probe event reason list
  ContainerUnhealthy = 'Unhealthy',
  ContainerProbeWarning = 'ProbeWarning',

  // Pod worker event reason list
  FailedSync = 'FailedSync',

  // Config event reason list
  FailedValidation = 'FailedValidation',

  // Lifecycle hooks
  FailedPostStartHook = 'FailedPostStartHook',
  FailedPreStopHook = 'FailedPreStopHook'
}
