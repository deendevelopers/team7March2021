import React from "react";
import { PostList, InfoSection } from "../components";
import { BaseLayout } from "../layouts/base-layout";
import { StoreContext } from "../store/store-context";

export default function PostsPage() {
  return (
    <StoreContext.Consumer>
      {(state) => (
        <BaseLayout>
          <InfoSection />
          <div className="flex items-center justify-center h-screen mx-20">
            <div>
            <h1 className="text-2xl mb-20">Clapham Notice Board</h1>

            <PostList posts={state.posts} />
            </div>
          </div>
        </BaseLayout>
      )}
    </StoreContext.Consumer>
  );
}
