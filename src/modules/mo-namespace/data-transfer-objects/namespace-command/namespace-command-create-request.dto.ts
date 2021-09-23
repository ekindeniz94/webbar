import { Expose, Transform, Type } from 'class-transformer';
import { NamespaceCommandStateEnum } from '../../enums';
import moment from 'moment';
import { isArray, IsEnum, IsNotEmpty, IsNumber, IsOptional, isString, IsString, MaxLength } from 'class-validator';
import { MoUtils } from '../../../../utils';
import { DTO_VALIDATION_CONST } from '../../../mo-core';

export class NamespaceCommandCreateRequestDto {
  @IsString()
  @Transform(
    ({ value, obj }) => {
      if (value) {
        return value;
      }
      obj.id = MoUtils.nanoid();
      return obj.id;
    },
    { toClassOnly: true }
  )
  @Expose()
  id: string;

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

  @IsOptional()
  @IsString()
  @MaxLength(DTO_VALIDATION_CONST.BLOG.TOPIC.MAX)
  @Transform(({ value }) =>
    (value && isString(value) ? value.trim() : value)?.substring(
      0,
      DTO_VALIDATION_CONST.NAMESPACE.NAMESPACE_COMMAND.MESSAGE.MAX
    )
  )
  @Expose()
  message: string;
}
