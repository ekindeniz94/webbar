import { Expose, Transform, Type } from 'class-transformer';
import { BaseEntityDto } from '../../../mo-core';
import { NamespaceCommandStateEnum } from '../../enums';
import moment from 'moment';
import { isArray, IsEnum, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class NamespaceCommandCreateRequestDto {
  @IsNotEmpty()
  @IsString()
  @Expose()
  namespaceId: string;

  @IsNotEmpty()
  @IsString()
  @Expose()
  title: string;

  @IsNotEmpty()
  @IsString()
  @Transform(({ value }) => moment(value).format())
  @Expose()
  startedAt: string;

  @IsNotEmpty()
  @IsEnum(NamespaceCommandStateEnum)
  @Transform(({ value }) => value ?? NamespaceCommandStateEnum.PENDING)
  @Expose()
  state: NamespaceCommandStateEnum;

  @IsNotEmpty()
  @IsNumber()
  @Transform(({ value }) => value ?? 0)
  @Expose()
  durationMs: number;

  @IsNotEmpty()
  @Type(() => NamespaceCommandCreateRequestDto)
  @Transform(({ value }) => {
    const subCommandList: NamespaceCommandCreateRequestDto[] = value && isArray(value) ? value : [];
    if (subCommandList.length <= 50) {
      return value;
    }
    return subCommandList
      .filter((item: NamespaceCommandCreateRequestDto) => {
        return moment(moment(item.startedAt)).isAfter(moment(item.startedAt).add(7, 'days'), 'day');
      })
      .slice(0, 50);
  })
  @Expose()
  subCommands: NamespaceCommandCreateRequestDto[];
}
