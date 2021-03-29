import Link from "next/link";
import React from "react";
import { PostInterface } from "../../models/post";
import { PostTypeIndicator } from "../post-type-indicator/post-type-indicator.component";

type Props = {
  post: PostInterface;
};

export const PostCard = ({ post }: Props) => {
  return (
    <Link href={`/post/${post._id}`}>
      <div className="h-full cursor-pointer">
        <div className="m-auto h-full">
          <div className="rounded-xl p-4 overflow-hidden h-full shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out">
            <div className="hidden col-span-3 row-span-4 ">
              <a href="#">
                <img
                  src="https://picsum.photos/640/400/?random"
                  alt="Placeholder"
                  className="object-cover h-48 w-full"
                />
              </a>
            </div>

            <div>
              <div className="flex align-bottom flex-col leading-none py-0">
                <div className="flex flex-row justify-between items-center">
                  <span className="text-sm font-light text-gray-500">
                    {post.type === "event" && `${post.date} • `}
                    {post.location}
                  </span>
                </div>
              </div>
            </div>

            <div>
              <header className="flex items-center justify-between leading-tight ">
                <h1 className="text-xl font-semibold">
                  <a
                    className="no-underline hover:underline text-black"
                    href="#"
                  >
                    {post.title}
                  </a>
                </h1>
              </header>
            </div>

            <div>
              <ul className="flex flex-row text-gray-600 overflow-x-scroll hide-scroll-bar">
                <li className="py-1">
                  <div className="transition duration-300 ease-in-out rounded-2xl mr-1 py-1">
                    <a className="" href="#">
                      {post.description}
                    </a>
                  </div>
                </li>
              </ul>
            </div>

            <div className="flex">
              <div className="flex-grow">
                <p>Education • Job skills</p>
              </div>
              {/* <div className="col-span-3 row-span-4 ">
              <span className="inline-block rounded-full opacity-80 bg-gray-500 w-8 h-8"></span>
              <span className="inline-block rounded-full -ml-3 opacity-80 bg-gray-500 w-8 h-8"></span>
              <span className="inline-block rounded-full -ml-3 opacity-80 bg-gray-500 w-8 h-8"></span>
              <span className="inline-block rounded-full -ml-3 opacity-80 bg-gray-500 w-8 h-8"></span>
              <span className="inline-block rounded-full -ml-3 opacity-80 bg-gray-500 w-8 h-8"></span>
            </div> */}

              <PostTypeIndicator type={post.type}></PostTypeIndicator>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};
