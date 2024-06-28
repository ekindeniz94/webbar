// import { Expose, Transform, Type } from 'class-transformer';
// import { isArray, IsString, MaxLength } from 'class-validator';
// import _ from 'lodash';
// import { GitBranchRefItemDto } from './git-branch-ref-item.dto';
// import { GitTagRefItemDto } from './git-tag-ref-item.dto';
//
// export class GitRefsListsDto {
//   @IsString({ each: true })
//   @MaxLength(512, { each: true })
//   @Transform(({ value }) => (value && isArray(value) ? _.uniq(value) : []) as string[])
//   @Type(() => GitBranchRefItemDto)
//   @Expose()
//   branches: GitBranchRefItemDto[];
//
//   @IsString({ each: true })
//   @MaxLength(512, { each: true })
//   @Transform(({ value }) => (value && isArray(value) ? _.uniq(value) : []) as string[])
//   @Type(() => GitTagRefItemDto)
//   @Expose()
//   tags: GitTagRefItemDto[];
// }
//
