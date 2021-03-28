import React, { PropsWithChildren, useState } from "react";
import { PostList } from "..";
import { Post } from "../../store/types";
import { InfoSection } from "../info-section/info-section.component";

type Props = {
  location: string;
  posts: Post[];
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
    <p>New noticeboards coming soon</p>
      <hr className="mb-5" />
      <FilterPanel />
      <PostList posts={filteredPosts} />
    </div>
  );
}
