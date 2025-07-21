
import { Expose } from 'class-transformer';
import { IsString, IsOptional } from 'class-validator';

export class WorkspaceTeamDto {
  @Expose()
  @IsString()
  id: string;

  @Expose()
  @IsString()
  name: string;

  @Expose()
  @IsOptional()
  description?: string;

  @Expose()
  @IsString()
  createdAt: string;

  @Expose()
  @IsString()
  updatedAt: string;

  @Expose()
  @IsString()
  createdBy: string;

  // Add other team properties as needed
}