import { GithubBranchDto } from './github';
import { GitlabBranchDto } from './gitlab';

export * from './git-connection';
export * from './github';
export * from './gitlab';

export type GitBranchDtoType = GithubBranchDto | GitlabBranchDto;
