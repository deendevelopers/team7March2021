import { Board, InfoSection, PostList } from "../components";
import { BaseLayout } from "../layouts/base-layout";
import { StoreContext } from "../store/store-context";

export default function Home() {
  return (
    <BaseLayout>
      <div className="lg:container w-full mx-auto flex flex-col items-center relative z-10">
        <div className="flex flex-col items-start md:py-24">

        <InfoSection />
          <StoreContext.Consumer>
            {(state) => <Board location="clapham" posts={state.posts} />}
          </StoreContext.Consumer>
        </div>

      </div>
    </BaseLayout>
  );
}
