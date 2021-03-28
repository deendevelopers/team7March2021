import { useRouter } from 'next/router';
import React, { useContext, useEffect } from "react";
import { LoginForm, RegistrationForm } from "../components";
import { BaseLayout } from "../layouts/base-layout";
import { StoreContext } from '../store/store-context';

export default function LoginPage() {
  const { register, login, loggedIn, registrationSuccess } = useContext(StoreContext);
  const router = useRouter();

  useEffect(() => {
    if (loggedIn) {
      router.push('/');
    }
  }, [loggedIn]);
  

  useEffect(() => {
    if (registrationSuccess) {
      alert('Registered - now log in');
    }
  }, [registrationSuccess]);
  

  return (
    <BaseLayout>
      <LoginForm onSubmit={login}></LoginForm>
      <RegistrationForm onSubmit={register}></RegistrationForm>
    </BaseLayout>
  );
}
