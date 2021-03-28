import Head from "next/head";
import React, { PropsWithChildren } from "react";
import { Header } from "../components";

type Props = PropsWithChildren<{
  title?: string;
}>;

const defaultTitle = "Notice";

export const BaseLayout = (props: Props) => {
  return (
    <div className="text-gray-700">
      <Head>
        <title>{props.title || defaultTitle}</title>
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css?family=Abhaya+Libre:400,800|Montserrat:600|Alegreya+Sans:500&display=swap" rel="stylesheet"></link>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" integrity="sha512-iBBXm8fW90+nuLcSKlbmrPcLa0OT92xO1BIsZ+ywDWZCvqsWgccV3gFoRBv0z+8dLJgyAHIhR35VZc2oM/gI1w==" crossOrigin="anonymous" />
      </Head>

      <Header />
      <div className="relative w-full lg:w-2/3 flex m-auto justify-center md:bg-white">
        {props.children}
      </div>
    </div>
  );
};
