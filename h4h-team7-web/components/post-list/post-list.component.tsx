import React from "react";
import { PostCard } from "..";
import { PostInterface } from "../../models/post";

type Props = {
  posts: PostInterface[];
};

export const PostList = ({ posts }: Props) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 px-6 w-full">
      {posts && posts.map((post) => <PostCard key={post.id} post={post} />)}
    </div>
  );
};
