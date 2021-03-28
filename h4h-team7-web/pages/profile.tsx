import { Router, useRouter } from "next/router";
import { useContext, useEffect } from "react";
import { BaseLayout } from "../layouts/base-layout";
import { StoreContext } from "../store/store-context";

export default function ProfilePage() {
  const { user } = useContext(StoreContext);
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      router.push("/login");
    }
  }, [user]);

  if (!user) {
    return (
      <BaseLayout>
        <p>Loading...</p>
      </BaseLayout>
    );
  }

  return (
    <BaseLayout>
      <h1>Profile for {user.email}</h1>
    </BaseLayout>
  );
}
