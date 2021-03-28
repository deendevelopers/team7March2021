import { useRouter } from "next/router";
import React, { useContext, useEffect } from "react";
import { Button, PostList, PostTypeIndicator } from "../../components";
import { BaseLayout } from "../../layouts/base-layout";
import { PostInterface } from "../../models/post";
import { StoreContext } from "../../store/store-context";

const sectionClassNames = "my-3 p-6 bg-white";

function getSimilarPosts(postid: string, posts: PostInterface[]) {
  return posts.slice(0, 2);
}

export default function PostDetailsPage() {
  const router = useRouter();
  const { postid } = router.query;
  console.log(router.query);

  const { posts = [] } = useContext(StoreContext);
  const post = posts.find((post) => post.id === postid);

  useEffect(() => {
    console.log({ postid });
    if (post === undefined) {
      router.push("/");
    }
  }, []);

  if (!post) {
    return <BaseLayout>Loading...</BaseLayout>;
  }

  const similarPosts = getSimilarPosts(postid as string, posts);

  return (
    <BaseLayout>
      <div>
        <section className="bg-white mb-4 px-6 pb-8">
          <h2 className="mb-3">Added 2 weeks ago</h2>
          <h1 className="text-3xl font-bold mb-5">{post.title}</h1>

          {post.type === "event" && <p className="mb-5">{post.date}</p>}
          <div className="flex align-middle items-center	">
            <div className="rounded-full bg-gray-500 w-12 h-12 mr-5"></div>
            <p className="inline flex-grow">Posted by Ajay M.</p>
            <PostTypeIndicator type={post.type}></PostTypeIndicator>
          </div>
        </section>
        <section className={sectionClassNames}>
          <img
            src="https://picsum.photos/640/400/?random"
            alt="Placeholder"
            className="object-cover h-48 w-full lg:w-1/2 m-auto mb-5"
          />
          <p className="font-bold text-xl mb-5">Details</p>
          <p className="font-bold mb-5">{post.title}</p>

          <p className="body mb-10">{post.description}</p>

          <p className="font-bold text-xl mb-5">Approximate Location</p>
          <div className="flex justify-center">
            <img
              src="/map.png"
              alt="Picture of the author"
              width={500}
              height={500}
              className="text-center"
            ></img>
          </div>
        </section>

        <section className="my-4 px-10 py-4 border-box">
          XX is about bringing the community together to blahblah.. Strictly no
          selling, no swaps, no donations.
        </section>

        <section className={sectionClassNames}>
          <div className="w-full lg:w-1/2 m-auto">
            <Button>Join</Button>
          </div>
        </section>

        <section className="my-3 bg-white py-10">
          <p className="font-bold text-lg mb-5 ml-5">Similar listings nearby</p>
          <PostList posts={similarPosts}></PostList>
        </section>
      </div>
    </BaseLayout>
  );
}
