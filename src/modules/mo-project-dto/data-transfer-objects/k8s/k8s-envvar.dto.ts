import { Expose, plainToInstance, Transform } from 'class-transformer';
import { ProjectNamespaceServiceEnvVarTypeEnum } from '../../enums/project-namespace-service-envvar-type.enum';
import { IsNotEmpty, IsObject, ValidateNested } from 'class-validator';
import { ProjectNamespaceServiceContainerEnvVarDataDto } from '../project-namespace-service-container-envvar';

export class K8sEnvVarDto {
  @Expose()
  id: string;

  @Expose()
  name: string;

  @IsNotEmpty()
  @Transform(({ value, obj }: { value: ProjectNamespaceServiceContainerEnvVarDataDto; obj: K8sEnvVarDto }) => {
    return plainToInstance(
      ProjectNamespaceServiceContainerEnvVarDataDto,
      {
        ...value,
        type: obj.type
      },
      { excludeExtraneousValues: true }
    );
  })
  @IsObject({ message: '$property must be an object' })
  @ValidateNested({ message: '$property must be an object' })
  @Expose()
  data: ProjectNamespaceServiceContainerEnvVarDataDto;

  @Expose()
  value: string;

  @Expose()
  type: ProjectNamespaceServiceEnvVarTypeEnum;
}
