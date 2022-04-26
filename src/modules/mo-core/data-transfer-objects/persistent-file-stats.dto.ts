// { directories: {}, sum: 0, durationMs: 0 }

import { Expose } from 'class-transformer';

export class PersistentFileStatsDto {
    @Expose()
    objects: Object;
  
    @Expose()
    sum: number;
  
    @Expose()
    durationMs?: number;

    @Expose()
    generatedAt: string;
  }