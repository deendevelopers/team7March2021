import React, { PropsWithChildren, useState } from "react";
import { PostList } from "..";
import { PostInterface } from "../../models/post";

type Props = {
  location: string;
  posts: PostInterface[];
};

type FilterItemProps = PropsWithChildren<{
  isActive?: boolean;
  onClick: () => void;
}>;

const FilterItem = ({ onClick, children, isActive }: FilterItemProps) => {
  return (
    <button
      className={`cursor-pointer mr-4 ${isActive ? "underline font-bold" : ""}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export function Board({ posts, location }: Props) {
  const [filterType, setFilterType] = useState<"event" | "service" | undefined>(
    undefined
  );

  const filteredPosts = filterType
    ? posts.filter((post) => post.type === filterType)
    : posts;

  const FilterPanel = () => (
    <div className="flex px-6">
      <div className="flex-grow">
        <FilterItem
          isActive={filterType === undefined}
          onClick={() => setFilterType(undefined)}
        >
          All
        </FilterItem>

        <FilterItem
          isActive={filterType === "event"}
          onClick={() => setFilterType("event")}
        >
          Events
        </FilterItem>
        <FilterItem
          isActive={filterType === "service"}
          onClick={() => setFilterType("service")}
        >
          Services
        </FilterItem>
      </div>
      <span
        className="font-bold cursor-pointer"
        onClick={() => setFilterType(undefined)}
      >
        Reset
      </span>
    </div>
  );

  return (
    <div className="bg-white w-full pt-10">
      <h1 className="text-2xl font-semibold mb-6 capitalize px-5">
        {location} Notice Board
      </h1>
      <div className="m-5">
        <p>New noticeboards coming soon!</p>
        <hr className="my-5 inline-block w-full" />
        <FilterPanel />
      </div>
      <PostList posts={filteredPosts} />
    </div>
  );
}
