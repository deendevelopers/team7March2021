import router from "next/router";
import React, { useContext, useEffect } from "react";
import { Account } from "../components";
import { BaseLayout } from "../layouts/base-layout";
import { ProfileInterface } from "../models/profile";
import { StoreContext } from "../store/store-context";

export default function RegistrationProfile() {
  const { createUserProfile, user, profile } = useContext(StoreContext);

  useEffect(() => {
    if (user && profile) router.push("/");
  }, [user, profile]);

  const handleSubmit = ({ username }) => {
    const values: ProfileInterface = {
      username,
      auth_id: user.uid,
      languages: ["English"],
      ...(user.email ? { email: user.email } : { mobile: user.phoneNumber }),
      profile_image: "",
    };
    createUserProfile(values);
  };

  return <Account onSubmit={handleSubmit} />;
}
