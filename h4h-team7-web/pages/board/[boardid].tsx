import React, { useEffect } from "react";
import { useRouter } from 'next/router';

import { InfoSection, Board } from "../../components";
import { BaseLayout } from "../../layouts/base-layout";
import { StoreContext } from "../../store/store-context";

const allowedLocations = [
  'clapham',
  'brixton',
  'balham',
  'hackney',
  'stockwell',
];

export default function BoardPage() {
  const router = useRouter()
  const { boardid = '' } = router.query;

  useEffect(() => {
    if (!allowedLocations.includes((boardid as string).toLocaleLowerCase())) {
      router.push('/');
    }
  }, []);

  return (
    <StoreContext.Consumer>
      {(state) => (
        <BaseLayout>
          <InfoSection />

          <InfoSection />
          <Board location={boardid as string} posts={state.posts} />;
        </BaseLayout>
      )}
    </StoreContext.Consumer>
  );
}
