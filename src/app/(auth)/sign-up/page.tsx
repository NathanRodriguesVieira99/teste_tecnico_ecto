"use client";

import { HttpClient } from "@/infra/http/http-client";
import { SignUpService as CreateAccountService } from "@/services/sign-up";
import { useSignUpPageModel } from "./sign-up.model";
import { SignUpPageView } from "./sign-up.view";

export default function SignUpPage() {
  const http = HttpClient.create();

  const SignUpService = new CreateAccountService(http);

  const methods = useSignUpPageModel({ SignUpService });

  return <SignUpPageView {...methods} />;
}
