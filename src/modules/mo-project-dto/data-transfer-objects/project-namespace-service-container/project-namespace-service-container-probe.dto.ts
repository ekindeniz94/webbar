import { IsBoolean, IsOptional, ValidateNested, validateSync } from 'class-validator';
import { Expose, plainToInstance, Transform, Type } from 'class-transformer';
import { ProbeDto } from '../probe/probe.dto';
import { MoUtils, TransformToBoolean } from '@mo/js-utils';

export class ProjectNamespaceServiceContainerProbeDto {
  @IsBoolean()
  @Type(() => Boolean)
  @TransformToBoolean(false)
  @Expose()
  isActive: boolean;

  @IsOptional()
  @ValidateNested()
  @Transform(({ value }) => plainToInstance(ProbeDto, value ?? {}, { excludeExtraneousValues: true }))
  @Type(() => ProbeDto)
  @Expose()
  livenessProbe?: ProbeDto;

  @IsOptional()
  @ValidateNested()
  @Transform(({ value }) => plainToInstance(ProbeDto, value ?? {}, { excludeExtraneousValues: true }))
  @Type(() => ProbeDto)
  @Expose()
  readinessProbe?: ProbeDto;

  @IsOptional()
  @ValidateNested()
  @Transform(({ value }) => plainToInstance(ProbeDto, value ?? {}, { excludeExtraneousValues: true }))
  @Type(() => ProbeDto)
  @Expose()
  startupProbe?: ProbeDto;

  public static initContainerProbeByPort(
    port: number,
    htmlError: boolean = true
  ): ProjectNamespaceServiceContainerProbeDto {
    const result = plainToInstance(ProjectNamespaceServiceContainerProbeDto, {
      livenessProbe: {
        httpGet: {
          port: port
        }
      },
      readinessProbe: {
        httpGet: {
          port: port
        }
      },
      startupProbe: {
        httpGet: {
          port: port
        }
      }
    });
    const validateData = validateSync(result);
    if (Array.isArray(validateData) && validateData.length > 0) {
      console.error(MoUtils.getValidationErrorMessages(validateData, htmlError));
    }
    return result;
  }
}
