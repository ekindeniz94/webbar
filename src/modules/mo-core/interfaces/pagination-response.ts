export interface IPaginationResponse<T = any> {
  hasMoreResults: boolean;
  continuationToken: string | undefined;
  maxItemCount: number;
  results: T[];
}
