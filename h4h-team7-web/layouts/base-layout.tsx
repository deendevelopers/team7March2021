import Head from "next/head";
import React, { PropsWithChildren } from "react";
import { Header } from "../components";

type Props = PropsWithChildren<{
  title?: string;
}>;

const defaultTitle = "Notice";

export const BaseLayout = (props: Props) => {
  return (
    <div>
      <Head>
        <title>{props.title || defaultTitle}</title>
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css?family=Abhaya+Libre:400,800|Montserrat:600|Alegreya+Sans:500&display=swap" rel="stylesheet"></link>
      </Head>

      <Header />
      <div className="relative">
        {props.children}
      </div>
    </div>
  );
};
