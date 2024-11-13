import { Expose } from 'class-transformer';
import { IsNotEmpty, IsString } from 'class-validator';

export class ListNamespacePoliciesRequestDto {
  @IsNotEmpty()
  @IsString()
  @Expose()
  namespaceName: string;
}
