import { EmailWhitelistCreateRequestDto } from "./email-whitelist-create-request.dto";
import { IsNotEmpty, IsString } from "class-validator";
import { Expose } from "class-transformer";
import { StripTags } from '../../../../utils';

export class EmailWhitelistPatchRequestDto extends EmailWhitelistCreateRequestDto {
  @IsNotEmpty()
  @IsString()
  @StripTags()
  @Expose()
  id: string;
}
