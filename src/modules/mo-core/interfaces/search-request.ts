export interface ISearchRequest {
  searchString: string;
  continuationToken: string | undefined;
  maxItemCount: number;
}
