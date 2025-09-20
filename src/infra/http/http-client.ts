import axios, { type AxiosError, type AxiosInstance } from "axios";
import { env } from "@/config/env";
import type { HttpRequest, IHttpClient } from "./http-client.types";

const NEXT_PUBLIC_API_URL = env.NEXT_PUBLIC_API_URL;
const SERVER_ERROR = 500;

export class HttpClient implements IHttpClient {
  private constructor(private readonly api: AxiosInstance = axios) {}

  // facilita a injeção do método
  static create() {
    return new HttpClient();
  }

  async request<TResponse, TBody>(props: HttpRequest<TBody>) {
    const { endpoint, method, body, headers } = props;

    try {
      const { data } = await this.api.request<TResponse>({
        url: `${NEXT_PUBLIC_API_URL}${endpoint}`,
        method,
        headers,
        data: body,
      });
      return data;
    } catch (err) {
      const error = err as AxiosError;
      const status = error.response?.status || SERVER_ERROR;
      const message = error.response?.data || error.message;
      throw new Error(`Request failed with status ${status}: ${message}`);
    }
  }
}
