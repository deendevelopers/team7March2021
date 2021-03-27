import { Board, PostList } from "../components";
import { BaseLayout } from "../layouts/base-layout";
import { StoreContext } from "../store/store-context";

export default function Home() {
  return (
    <BaseLayout>
      <main className="bg-white font-abhaya-libre relative">
        <div className="container mx-auto px-6 sm:px-12 flex flex-col sm:flex-row items-center relative z-10">
          <div className="sm:w-1/2 xl:w-2/6 flex flex-col items-start py-24 sm:py-0">
            <h1 className="text-6xl xl:text-10xl font-abhaya-libre text-green-900 font-bold leading-none">
              Notice.
            </h1>
            <h2 className="text-xl xl:text-3xl font-abhaya-libre text-green-900 uppercase font-bold leading-none tracking-widest -mt-2 mb-6">
              Landing page
            </h2>
            <p className="xl:text-lg tracking-wider text-gray-700 font-alegraya-sans">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy nibh minim veniam, quis nostrud
            </p>
            <a
              href="#"
              className="font-montserrat text-white sm:font-xl uppercase py-3 px-6 sm:py-4 sm:px-8 rounded-full shadow-lg bg-green-900 hover:bg-green-800 mt-8 sm:mt-16"
            >
              Read more
            </a>
          </div>
          <div className="hidden sm:flex items-center justify-center xl:justify-end w-1/2 xl:w-4/6 py-32"></div>
        </div>

        <StoreContext.Consumer>
          {(state) => <Board location="clapham" posts={state.posts} />}
        </StoreContext.Consumer>
      </main>
    </BaseLayout>
  );
}
