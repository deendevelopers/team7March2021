import { useRouter } from "next/router";
import React, { useContext, useEffect } from "react";
import { LoginForm, RegistrationForm } from "../components";
import { BaseLayout } from "../layouts/base-layout";
import { StoreContext } from "../store/store-context";

export default function LoginPage() {
  const { register, login, loggedIn, registrationSuccess } = useContext(
    StoreContext
  );
  const router = useRouter();

  useEffect(() => {
    if (loggedIn) {
      router.push("/");
    }
  }, [loggedIn]);

  useEffect(() => {
    if (registrationSuccess) {
      alert("Registered - now log in");
    }
  }, [registrationSuccess]);

  return (
    <BaseLayout>
    <div className="flex flex-col">
      <h3 className="pt-4 text-2xl ml-8 lg:m-0 lg:text-center">
        Login or Sign up below
      </h3>
      <span className="block w-2/3 lg:w-full ml-8 lg:ml-0 my-6 text-sm font-light text-gray-500 lg:text-center">
        Log in or sign up to make use of the full noticeboard and interact with
        postings.
      </span>
      <LoginForm onSubmit={login}></LoginForm>
      <span className="block w-full text-lg font-light text-gray-500 lg:text-center text-center">
        Or{" "}
      </span>
      <RegistrationForm onSubmit={register}></RegistrationForm>
      </div>
    </BaseLayout>
  );
}
