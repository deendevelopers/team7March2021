import React from "react";
import { PostCard } from "..";
import { PostInterface } from "../../models/post";

type Props = {
  posts: PostInterface[];
  singleCol?: boolean;
};

export const PostList = ({ posts, singleCol }: Props) => {
  return (
    <div className={`grid grid-cols-1 lg:grid-cols-${singleCol ? 1 : 2} gap-10 px-6 w-full`}>
      {posts && posts.map((post) => <PostCard key={post.id} post={post} />)}
    </div>
  );
};
