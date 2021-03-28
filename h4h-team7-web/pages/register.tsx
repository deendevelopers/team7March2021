import React, { useContext } from "react";
import { RegistrationForm } from "../components";
import { StoreContext } from '../store/store-context';

export default function RegistrationPage() {
  const { register } = useContext(StoreContext);

  return <RegistrationForm onSubmit={register}></RegistrationForm>;
}
