"use client";

import { env } from "@/config/env";
import { HttpMethod, type IHttpClient } from "@/infra/http/http-client.types";

export type SignUpServiceBody = {
  name: string;
  last_name: string;
  email: string;
  phone: string;
  password: string;
  confirm_password: string;
};

export type ISignUpService = {
  exec: (data: SignUpServiceBody) => Promise<void>;
};

export class SignUpService implements ISignUpService {
  constructor(private readonly httpClient: IHttpClient) {}

  async exec(body: SignUpServiceBody) {
    const signInServiceResponse = await this.httpClient.request<void>({
      method: HttpMethod.POST,
      endpoint: "/",
      body,
      headers: { Authorization: env.NEXT_PUBLIC_API_TOKEN },
    });

    return signInServiceResponse;
  }
}
