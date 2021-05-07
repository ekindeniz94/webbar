import { isBoolean, IsBoolean, IsNotEmpty, IsOptional, IsString, MaxLength } from 'class-validator';
import { Expose, Transform, Type } from 'class-transformer';
import { FileTypeDto } from './file-type.dto';
import { FileMiscDataCreateResponseDto } from './file-misc-data-create-response.dto';

export class FileMiscDataPatchResponseDto extends FileMiscDataCreateResponseDto {}
