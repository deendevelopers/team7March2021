import { Router, useRouter } from "next/router";
import { useContext, useEffect } from "react";
import { BaseLayout } from "../layouts/base-layout";
import { StoreContext } from "../store/store-context";

export default function ProfilePage() {
  const { loggedIn, user } = useContext(StoreContext);
  const router = useRouter();

  useEffect(() => {
    if (!loggedIn || !user) {
      router.push("/login");
    }
  }, [loggedIn, user]);

  if (!user) {
    return <BaseLayout><p>Loading...</p></BaseLayout>;
  }

  return (
    <BaseLayout>
      <h1>Profile for {user.email}</h1>
    </BaseLayout>
  );
}
