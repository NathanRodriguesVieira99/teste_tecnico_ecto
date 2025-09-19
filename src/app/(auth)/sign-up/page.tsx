"use client";

import { useSignUpPageModel } from "./sign-up.model";
import { SignUpPageView } from "./sign-up.view";

export default function SignUpPage() {
  const methods = useSignUpPageModel();
  return <SignUpPageView {...methods} />;
}
