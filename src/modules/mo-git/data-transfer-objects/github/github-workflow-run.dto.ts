import { Expose, Transform, Type } from 'class-transformer';
import { GithubActorDto } from './github-actor.dto';
import { GithubHeadCommitDto } from './github-head-commit.dto';
import { GithubRepositoryDto } from './github-repository.dto';
import moment from 'moment';

export class GithubWorkflowRunDto {
  @Expose()
  id: number;

  @Expose()
  name: string;

  @Expose()
  node_id: string;

  @Expose()
  head_branch: string;

  @Expose()
  head_sha: string;

  @Expose()
  path: string;

  @Expose()
  display_title: string;

  @Expose()
  run_number: number;

  @Expose()
  event: string;

  @Expose()
  status: string;

  @Expose()
  conclusion: string;

  @Expose()
  workflow_id: number;

  @Expose()
  check_suite_id: number;

  @Expose()
  check_suite_node_id: string;

  @Expose()
  url: string;

  @Expose()
  html_url: string;

  @Expose()
  pull_requests: any[];

  @Expose()
  created_at: string;

  @Expose()
  updated_at: string;

  @Type(() => GithubActorDto)
  @Expose()
  actor: GithubActorDto;

  @Expose()
  run_attempt: number;

  @Expose()
  referenced_workflows: any[];

  @Expose()
  run_started_at: string;

  @Type(() => GithubActorDto)
  @Expose()
  triggering_actor: GithubActorDto;

  @Expose()
  jobs_url: string;

  @Expose()
  logs_url: string;

  @Expose()
  check_suite_url: string;

  @Expose()
  artifacts_url: string;

  @Expose()
  cancel_url: string;

  @Expose()
  rerun_url: string;

  @Expose()
  previous_attempt_url: string | null;

  @Expose()
  workflow_url: string;

  @Type(() => GithubHeadCommitDto)
  @Expose()
  head_commit: GithubHeadCommitDto;

  @Type(() => GithubRepositoryDto)
  @Expose()
  repository: GithubRepositoryDto;

  @Type(() => GithubRepositoryDto)
  @Expose()
  head_repository: GithubRepositoryDto;

  @Transform(({ value, obj }: { value: string; obj: GithubWorkflowRunDto }) => {
    if (value) {
      return value;
    }
    if (obj?.status === 'completed') {
      switch (obj?.conclusion) {
        case 'success':
          return 'success';
        case 'action_required':
        case 'cancelled':
        case 'failure':
        case 'timed_out':
          return 'danger';
        case 'neutral':
        case 'skipped':
        case 'stale':
          return 'info';
        default:
          return undefined;
      }
    } else if (['in_progress', 'queued', 'requested', 'waiting', 'pending'].includes(obj?.status ?? '')) {
      return 'building';
    }

    return undefined;
  })
  @Expose()
  public getStateBubble: 'success' | 'danger' | 'error' | 'warning' | 'info' | 'building' | 'inactive' | undefined;

  get duration(): number {
    const start = moment(this.run_started_at);
    const end = moment(this.updated_at);
    return end.diff(start, 'seconds');
  }
}
