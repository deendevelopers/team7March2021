import React, { PropsWithChildren } from "react";
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
        <Link href="/"><h1 className="font-bold underline cursor-pointer">Notice</h1></Link>
        <nav className="flex items-center">
          <NavItem className="font-bold" href="/create-post">Create a post</NavItem>
          <NavItem className="underline" href="/login">Log In</NavItem>
          <NavItem className="underline"href="/register">Sign Up</NavItem>
        </nav>
      </div>
    </header>
  );
};
