import { useRouter } from "next/router";
import React, { useContext, useEffect } from "react";
import { LoginForm, RegistrationForm } from "../components";
import { BaseLayout } from "../layouts/base-layout";
import { StoreContext } from "../store/store-context";
import { firebase } from "../store/firebase";
import MobileAuthPopup from "../components/firebase/MobileAuthPopup";

export type GetUserProfileRequest = {
  authId: string;
};

export default function LoginPage() {
  const {
    register,
    login,
    profile,
    registrationStatus,
    getUserProfile,
    user,
    saveUser,
  } = useContext(StoreContext);
  const router = useRouter();

  useEffect(() => {
    const unlistenToAuth = firebase.auth().onAuthStateChanged((authUser) => {
      if (authUser) {
        saveUser(authUser);
      }
    });
    return () => {
      unlistenToAuth();
    };
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (user && !profile && registrationStatus === "user-created")
      router.push("/account-created");
    else if (user && !profile) getUserProfile({ authId: user.uid });
    else if (user && profile) router.push("/");
  }, [user, profile, registrationStatus]);

  return (
    <BaseLayout>
      <div className="flex flex-col">
        <h3 className="pt-4 text-3xl ml-8 lg:m-0 lg:text-center font-bold">
          Login or Sign up below
        </h3>
        <span className="block w-2/3 lg:w-full ml-8 lg:ml-0 my-10 lg:text-center">
          Log in or sign up to make use of the full noticeboard and interact
          with postings.
        </span>
        <MobileAuthPopup />
        {/* <LoginForm onSubmit={login}></LoginForm> */}
        {/* <span className="block w-full text-lg font-light text-gray-700 lg:text-center text-center"> */}
        {/* Or{" "} */}
        {/* </span> */}
        {/* <RegistrationForm onSubmit={register}></RegistrationForm> */}
      </div>
    </BaseLayout>
  );
}
