// biome-ignore lint/style/noEnum: prefiro usar enum
export enum HttpMethod {
  GET = "get",
  POST = "post",
  PUT = "put",
  PATCH = "patch",
  DELETE = "delete",
}

export type HttpRequest<TBody> = {
  endpoint: string;
  method: HttpMethod;
  body?: TBody;
  headers?: Record<string, string>;
};

export type IHttpClient = {
  request: <TResponse, TBody = unknown>(
    request: HttpRequest<TBody>
  ) => Promise<TResponse>;
};
