import { GitConnectionTypeEnum } from '../../enums';

export class GitAccessTokenCreateRequestDto {
    provider: GitConnectionTypeEnum;
    domain: string;
    token: string;
    namespace_id: string;
}