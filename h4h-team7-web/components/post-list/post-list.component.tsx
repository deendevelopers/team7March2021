import React from "react";
import { PostCard } from "..";
import { Post } from '../../store/types';

type Props = {
  posts: Post[];
};

export const PostList = ({ posts }: Props) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 px-6 w-full">
      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
  </div>
  );
};
