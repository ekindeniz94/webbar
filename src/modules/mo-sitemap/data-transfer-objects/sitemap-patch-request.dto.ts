import { Expose } from 'class-transformer';
import { IsNotEmpty, IsString, IsUUID } from 'class-validator';
import { SitemapCreateRequestDto } from './sitemap-create-request.dto';

export class SitemapPatchRequestDto extends SitemapCreateRequestDto {
    @IsNotEmpty()
    @IsString()
    @IsUUID()
    @Expose()
    id: string;    
}
