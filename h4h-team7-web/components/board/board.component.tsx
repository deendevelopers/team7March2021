import React from "react";
import { PostList } from "..";
import { Post } from '../../store/types';

type Props = {
  location: string;
  posts: Post[];
}

export const Board = ({ posts, location }: Props) => {
  return (
    <div className="flex items-center justify-center mx-4 lg:mx-20 pt-16">
      <div>
        <h1 className="text-2xl mb-20 capitalize">{location} Notice Board</h1>
        <PostList posts={posts} />
      </div>
    </div>
  );
};