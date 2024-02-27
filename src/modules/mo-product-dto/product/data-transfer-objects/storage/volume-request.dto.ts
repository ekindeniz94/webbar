import { Expose, Transform } from 'class-transformer';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { MoProjectDtoUtils, PROJECT_CONST } from '../../../../mo-project-dto';

export class VolumeRequestDto {
  @IsNotEmpty()
  @Transform(({ value }) => MoProjectDtoUtils.k8sName(value, PROJECT_CONST.K8S_NAME.MAX - 16))
  @Expose()
  @IsString()
  volumeName: string;

  @IsNotEmpty()
  @Expose()
  @IsNumber()
  sizeInGb: number;
}
