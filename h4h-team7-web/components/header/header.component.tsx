import React, { PropsWithChildren } from "react";
import { Title } from "..";
import Link from "next/link";


const NavItem = (props: PropsWithChildren<{href?:string, className?:string}>) => {
  return (
    <Link href={props.href || ""}>
      <span className={`hidden xl:block font-abhaya-libre sentencecase text-gray-800 tracking-wider px-4 xl:px-8 py-2 text-md hover:underline ${props.className}`}>
        {props.children}
      </span>
    </Link>
  );
};

export const Header = () => {
  return (
    <header className="h-24 sm:h-32 flex items-center top-0 right-0 z-20">
      <div className="container mx-auto px-6 sm:px-12 flex items-center justify-between">
        <h1 className="font-bold underline">Notice</h1>
        <nav className="flex items-center">
          <NavItem className="font-bold" href="/posts">Create a post</NavItem>
          <NavItem className="underline" href="/register">Log In</NavItem>
          <NavItem className="underline"href="/register">Sign Up</NavItem>

          {/* <button className="ml-4 xl:ml-8 flex flex-col">
            <span className="w-8 h-1 bg-gray-800 mb-1 rounded"></span>
            <span className="w-8 h-1 bg-gray-800 mb-1 rounded"></span>
            <span className="w-8 h-1 bg-gray-800 mb-1 rounded"></span>
          </button> */}
        </nav>
      </div>
    </header>
  );
};
