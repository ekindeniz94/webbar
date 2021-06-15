import { Expose } from 'class-transformer';
import { NamespaceCommandStateEnum } from '../../enums';
import { IsEnum, IsNotEmpty, IsNumber } from 'class-validator';
import { NamespaceServiceCreateRequestDto } from './namespace-service-create-request.dto';

export class NamespaceServicePatchRequestDto extends NamespaceServiceCreateRequestDto {}
