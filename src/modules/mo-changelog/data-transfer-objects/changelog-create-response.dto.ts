import { ChangelogDto } from './changelog.dto';
import { Expose } from 'class-transformer';
import { IsDate, IsString } from 'class-validator';
import { BaseEntityDto } from '../../mo-core';

export class ChangelogCreateResponseDto extends ChangelogDto {}
