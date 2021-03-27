import React from "react";
import { Post } from "../../store/types";
import { POINT_CONVERSION_HYBRID } from "constants";

type Props = {
  post: Post;
};

export const PostCard = ({ post }: Props) => {
  return (
    <div className="p-56">
      <div className="w-96 m-auto ">
        <div className=" grid grid-cols-3 grid-rows-7 grid-flow-row overflow-hidden w-72 shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out">
          <div className="col-span-3 row-span-4 p-1 m-1">
            <a href="#">
              <img
                src="https://picsum.photos/640/400/?random"
                alt="Placeholder"
                className="object-cover h-48 w-full"
              />
            </a>
          </div>

          <div className="col-span-3 row-span-1">
            <div className="flex align-bottom flex-col leading-none px-4 py-0">
              <div className="flex flex-row justify-between items-center">
               
                  <span className="text-sm font-light text-gray-500"> 
                  {post.subtitle} </span>
                
              </div>
            </div>
          </div>

          <div className="col-span-3 row-span-1">
            <header className="flex items-center justify-between leading-tight p-2 md:p-4">
              <h1 className="text-md">
                <a className="no-underline hover:underline text-black" href="#">
                  {post.title}
                </a>
              </h1>
            </header>
          </div>

          <div className="col-span-3 row-span-1">
            
            <ul className="flex flex-row pl-2 text-gray-600 overflow-x-scroll hide-scroll-bar">
              <li className="py-1">
                <div className="transition duration-300 ease-in-out rounded-2xl mr-1 px-2 py-1 hover:bg-blue-200 hover:text-gray-800">
                  <a className="" href="#">
                    {post.description}
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
