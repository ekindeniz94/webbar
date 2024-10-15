// import { Expose, Type } from 'class-transformer';
// import { IsEnum, IsNotEmpty, IsNumber, Max, Min } from 'class-validator';
// import { NetworkPolicyPortTypeEnum } from "../../enums";
//
// export class K8sLabeledPortDto {
//   @Type(() => Number)
//   @IsNumber()
//   @Min(0)
//   @Max(65535)
//   @Expose()
//   port: number;
//
//   @IsNotEmpty()
//   @IsEnum(NetworkPolicyPortTypeEnum)
//   @Expose()
//   portType: NetworkPolicyPortTypeEnum;
// }
