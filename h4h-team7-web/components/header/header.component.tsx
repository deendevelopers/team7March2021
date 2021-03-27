import React, { PropsWithChildren } from "react";
import { Title } from "..";
import Link from "next/link";


const NavItem = (props: PropsWithChildren<{href?:string}>) => {
  return (
    <Link href={props.href || ""}>
      <span className="hidden xl:block font-abhaya-libre uppercase text-gray-800 tracking-wider px-4 xl:px-8 py-2 text-lg hover:underline">
        {props.children}
      </span>
    </Link>
  );
};

export const Header = () => {
  return (
    <header className="h-24 sm:h-32 flex items-center absolute top-0 right-0 z-20">
      <div className="container mx-auto px-6 sm:px-12 flex items-center justify-end">
        <Title></Title>
        <nav className="flex items-center">
          <NavItem href="/">Home</NavItem>
          <NavItem >About</NavItem>
          <NavItem >Posts</NavItem>
          <NavItem href="/register">Register</NavItem>

          <button className="ml-4 xl:ml-8 flex flex-col">
            <span className="w-8 h-1 bg-gray-800 mb-1 rounded"></span>
            <span className="w-8 h-1 bg-gray-800 mb-1 rounded"></span>
            <span className="w-8 h-1 bg-gray-800 mb-1 rounded"></span>
          </button>
        </nav>
      </div>
    </header>
  );
};
