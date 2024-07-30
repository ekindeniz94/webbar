import { IsBoolean, IsInt, IsOptional, ValidateIf, ValidateNested } from 'class-validator';
import { Expose, plainToInstance, Transform, Type } from 'class-transformer';
import { ProbeHttpGetDto } from './probe-http-get.dto';
import { ProbeTcpSocketDto } from './probe-tcp-socket.dto';
import { ProbeExecDto } from './probe-exec.dto';
import { TransformToBoolean } from '@mogenius/js-utils';
import { ProbeGrpcDto } from './probe-grpc.dto';

export class ProbeDto {
  @IsBoolean()
  @Type(() => Boolean)
  @TransformToBoolean(false)
  @Expose()
  isActive: boolean;

  @IsOptional()
  @IsInt()
  @Transform(({ value }) => value ?? 0)
  @ValidateIf((obj: ProbeDto) => obj.isActive)
  @Expose()
  initialDelaySeconds?: number;

  @IsOptional()
  @IsInt()
  @Transform(({ value }) => value ?? 5)
  @ValidateIf((obj: ProbeDto) => obj.isActive)
  @Expose()
  periodSeconds?: number;

  @IsOptional()
  @IsInt()
  @Transform(({ value }) => value ?? 1)
  @ValidateIf((obj: ProbeDto) => obj.isActive)
  @Expose()
  timeoutSeconds?: number;

  @IsOptional()
  @IsInt()
  @Transform(({ value }) => value ?? 1)
  @ValidateIf((obj: ProbeDto) => obj.isActive)
  @Expose()
  successThreshold?: number;

  @IsOptional()
  @IsInt()
  @Transform(({ value }) => value ?? 3)
  @ValidateIf((obj: ProbeDto) => obj.isActive)
  @Expose()
  failureThreshold?: number;

  @IsOptional()
  @ValidateNested()
  @Type(() => ProbeHttpGetDto)
  @Transform(({ value }) =>
    value ? plainToInstance(ProbeHttpGetDto, value, { excludeExtraneousValues: true }) : undefined
  )
  @ValidateIf((obj: ProbeDto) => obj.isActive)
  @Expose()
  httpGet?: ProbeHttpGetDto;

  @IsOptional()
  @ValidateNested()
  @Type(() => ProbeTcpSocketDto)
  @Transform(({ value }) =>
    value ? plainToInstance(ProbeTcpSocketDto, value, { excludeExtraneousValues: true }) : undefined
  )
  @ValidateIf((obj: ProbeDto) => obj.isActive)
  @Expose()
  tcpSocket?: ProbeTcpSocketDto;

  @IsOptional()
  @ValidateNested()
  @Transform(({ value }) =>
    value ? plainToInstance(ProbeExecDto, value, { excludeExtraneousValues: true }) : undefined
  )
  @Type(() => ProbeExecDto)
  @ValidateIf((obj: ProbeDto) => obj.isActive)
  @Expose()
  exec?: ProbeExecDto;

  @IsOptional()
  @ValidateNested()
  @Transform(({ value }) =>
    value ? plainToInstance(ProbeGrpcDto, value, { excludeExtraneousValues: true }) : undefined
  )
  @Type(() => ProbeGrpcDto)
  @ValidateIf((obj: ProbeDto) => obj.isActive)
  @Expose()
  grpc?: ProbeGrpcDto;
}
