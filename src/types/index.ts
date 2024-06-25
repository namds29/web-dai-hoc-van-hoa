export type ResponeType = {
    message: string,
    data: any
}
export interface PromiseResult<T> {
    status: 'fulfilled' | 'rejected';
    value?: T;
    reason?: any;
  }

 export type FetchResult = {
    source: string;
    data?: any;
    error?: any;
  }