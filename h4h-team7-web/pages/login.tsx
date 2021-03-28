import React from "react";
import { LoginForm, RegistrationForm } from "../components";
import { BaseLayout } from "../layouts/base-layout";

export default function LoginPage() {
  return <BaseLayout>
  <LoginForm></LoginForm>
  <RegistrationForm></RegistrationForm>
  </BaseLayout>;
}
