import Link from 'next/link';
import React, { PropsWithChildren, useState } from "react";
import { PostList } from "..";
import { PostInterface } from "../../models/post";
import { Button } from "../button/button.component";

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

  const [activeTopics, setActiveTopics] = useState<string[]>([]);

  const toggleTopic = (topic: string) => {
    if (activeTopics.includes(topic)) {
      setActiveTopics(activeTopics.filter((t) => t !== topic));
    } else {
      setActiveTopics([...activeTopics, topic]);
    }
  };

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

  const TopicPanel = () => {
    const topics = [
      "Activity",
      "Skills",
      "Meet up",
      "Friendship",
      "Professional Advice",
    ];

    return (
      <>
        {topics.map((topic) => {
          const isActive = activeTopics.includes(topic);

          const className = isActive
            ? "text-white bg-brick"
            : "text-brick bg-lightbrick"
          return (
            <button
              onClick={() => toggleTopic(topic)}
              className={`rounded-full font-semibold ${className} px-7 py-2 mr-3 mb-3`}
            >
              {topic}
            </button>
          );
        })}
      </>
    );
  };

  return (
    <div className="bg-white w-full pt-10">
      <h1 className="text-2xl text-center font-black mb-6 capitalize px-5">
        {location} Noticeboard <i className="fas fa-angle-down"></i>
      </h1>
      <div className="m-5">
        <p className="text-center">New noticeboards coming soon! 🎉</p>
        <hr className="my-5 inline-block w-full" />
        <p className="text-left font-semibold my-6">Event Type</p>

        <FilterPanel />
        <p className="text-left uppercase font-semibold my-6">Topics</p>
        <TopicPanel />
        <p className="text-left  font-semibold my-6">Sort by <i className="fas fa-angle-down"></i></p>

       
        <Button><Link href="/create-post">Create a Post</Link></Button>
      </div>
      <PostList posts={filteredPosts} />
    </div>
  );
}
