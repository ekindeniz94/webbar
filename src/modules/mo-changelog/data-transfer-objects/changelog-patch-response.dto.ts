import { Expose } from 'class-transformer';
import { IsString } from 'class-validator';
import { BaseEntityDto } from '../../mo-core';
import { ChangelogCreateResponseDto } from './changelog-create-response.dto';

export class ChangelogPatchResponseDto extends ChangelogCreateResponseDto {}
