import React from "react";
import { PostCard } from "..";
import { Post } from '../../store/types';

type Props = {
  posts: Post[];
};

export const PostList = ({ posts }: Props) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">
      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
  </div>
  );
};
