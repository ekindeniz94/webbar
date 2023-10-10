import { IsArray, IsDefined, IsObject, IsOptional, IsString, ValidateNested } from 'class-validator';
import { Expose, Type } from 'class-transformer';

export class OnEvent {
  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  @Expose()
  branches?: string[];

  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  @Expose()
  tags?: string[];
}

export class OnScheduleEvent {
  @IsOptional()
  @IsString()
  @Expose()
  cron?: string;
}

export class On {
  @IsOptional()
  @ValidateNested()
  @Type(() => OnEvent)
  @Expose()
  push?: OnEvent;

  @IsOptional()
  @ValidateNested()
  @Type(() => OnEvent)
  @Expose()
  pull_request?: OnEvent;

  @IsOptional()
  @ValidateNested()
  @Type(() => OnScheduleEvent)
  @Expose()
  schedule?: OnScheduleEvent[];
}

export class JobStep {
  @IsDefined()
  @IsString()
  @Expose()
  name: string;

  @IsOptional()
  @IsString()
  @Expose()
  id?: string;

  @IsOptional()
  @IsString()
  @Expose()
  if?: string;

  @IsOptional()
  @IsObject()
  @Expose()
  env?: { [envName: string]: string };

  @IsOptional()
  @IsString()
  @Expose()
  uses?: string;

  @IsOptional()
  @IsObject()
  @Expose()
  with?: { [key: string]: string };

  @IsOptional()
  @IsString()
  @Expose()
  run?: string;
}

export class Job {
  @IsDefined()
  @IsString()
  @Expose()
  'runs-on': string;

  @IsOptional()
  @IsObject()
  @Expose()
  permissions?: { [key: string]: string };

  @IsDefined()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => JobStep)
  @Expose()
  steps: JobStep[];
}

export class GitHubActionDTO {
  @IsDefined()
  @IsString()
  @Expose()
  name: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => On)
  @Expose()
  on?: On;

  @IsDefined()
  @ValidateNested()
  @Expose()
  jobs: { [jobName: string]: Job };
}
