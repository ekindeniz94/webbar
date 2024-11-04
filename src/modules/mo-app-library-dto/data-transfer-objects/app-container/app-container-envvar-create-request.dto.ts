import { ProjectNamespaceServiceContainerEnvvarCreateRequestDto } from '../../../mo-project-dto/data-transfer-objects/project-namespace-service-container-envvar/project-namespace-service-container-envvar-create-request.dto';
import { IsNotEmpty, IsObject } from 'class-validator';
import { Expose, plainToInstance, Transform } from 'class-transformer';
import { AppContainerEnvVarDataCreateRequestDto } from './app-container-envvar-data-create-request.dto';

export class AppContainerEnvVarCreateRequestDto extends ProjectNamespaceServiceContainerEnvvarCreateRequestDto {
  @IsNotEmpty()
  @Transform(
    ({ value, obj }: { value: AppContainerEnvVarDataCreateRequestDto; obj: AppContainerEnvVarCreateRequestDto }) => {
      return plainToInstance(
        AppContainerEnvVarDataCreateRequestDto,
        {
          ...value,
          type: obj.type
        },
        { excludeExtraneousValues: true }
      );
    }
  )
  @IsObject({ message: '$property must be an object' })
  // @ValidateNested({ message: '$property must be an object', always: false })
  @Expose()
  declare data: AppContainerEnvVarDataCreateRequestDto;
}
