import { useContext } from 'react';
import { Board, Button, InfoSection, PostList } from "../components";
import { BaseLayout } from "../layouts/base-layout";
import { StoreContext } from "../store/store-context";


const UserInfoSection = () => {
  const { user,  posts } = useContext(StoreContext);

  return (
    <div className="w-full p-6 md:w-1/2 m-auto mb-8">
      <div className="text-center mb-5">
        <p className="my-2">Hiya Sarah 👋</p>
        <h2 className="text-2xl font-bold">Welcome back</h2>
        <img className="w-32 mx-auto my-5" src="/icon-heart.svg"></img>
        <h1 className="text-3xl font-bold">Your upcoming events</h1>
      </div>
      {posts && <PostList singleCol posts={[posts[0]]} />}
      <div className="w-1/2 m-auto mt-5">
        <Button>Show All</Button>
      </div>
    </div>
  );
}

export default function Home() {
  const { user } = useContext(StoreContext);
  const loggedIn = user !== undefined;
  return (
    <BaseLayout>
      <div className="lg:container w-full mx-auto flex flex-col items-center relative z-10">
        <div className="w-full flex flex-col items-start md:py-24">
        {loggedIn && <UserInfoSection />}
        {!loggedIn && <InfoSection />}
          <StoreContext.Consumer>
            {(state) => <Board location="clapham" posts={state.posts} />}
          </StoreContext.Consumer>
        </div>
      </div>
    </BaseLayout>
  );
}
