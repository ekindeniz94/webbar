import { Expose } from 'class-transformer';
import { IsNotEmpty, IsString } from 'class-validator';

export class ComposeRequestDto {
    @IsNotEmpty()
    @IsString()
    @Expose()
    composeYaml: string;
}