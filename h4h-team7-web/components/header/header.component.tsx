import React, { PropsWithChildren, useContext } from "react";
import Link from "next/link";
import { StoreContext } from "../../store/store-context";
import { Button } from "../button/button.component";

const NavItem = (
  props: PropsWithChildren<{ href?: string; className?: string }>
) => {
  return (
    <Link href={props.href || ""}>
      <span
        className={`xl:block font-abhaya-libre sentencecase text-gray-800 tracking-tight px-2 xl:px-8 text-md hover:underline cursor-pointer ${props.className}`}
      >
        {props.children}
      </span>
    </Link>
  );
};

export const Header = () => {
  const { user, loggedIn } = useContext(StoreContext);

  return (
    <header className="lg:h-24 h-24 flex justify-between items-center top-0 right-0 z-20 ">
      <div className="container mx-auto px-4 lg:px-0 flex items-center justify-between">
        <div className="relative flex items-center">
          <Link href="/">
            <img
              className="w-28 mx-auto my-5 cursor-pointer"
              src="/logo-wordmark-inline.svg"
              alt="Notice logo"
            ></img>
          </Link>
        </div>
        <div>
          <nav className="flex items-center">
            <NavItem
              className="font-bold"
              href={loggedIn ? "/login" : "/create-post"}
            >
              <>
                <span
                  className="rounded-full px-5 py-2 text-white bg-indigo font-bold"
                >
                  <i className="fas fa-thumbtack mr-1 w-3 h-3"></i>
                  Create a post
                </span>
              </>
            </NavItem>

            {loggedIn ? (
              <NavItem className="underline hover:bold" href="/profile">
                <div className="flex">
                  <span>{user.email}</span>

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-8 h-8 mx-1 lg:mx-8 fill: gray-500"
                  >
                    <path
                      fillRule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </NavItem>
            ) : (
              <NavItem className="underline hover:bold" href="/login">
                Log In
              </NavItem>
            )}
          </nav>
        </div>
      </div>
    </header>
  );
};
