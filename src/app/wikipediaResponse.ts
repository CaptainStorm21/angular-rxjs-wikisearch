// tslint:disable-next-line: no-empty-interface
export interface WikipediaResponse {
  query: {
    search: {
      title: string,
      snippet: string,
      pageid: number
    }[];
  };
}
