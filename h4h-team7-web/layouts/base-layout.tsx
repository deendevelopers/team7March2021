import Head from 'next/head';
import React, { PropsWithChildren } from 'react'
import { Header } from '../components';

type Props = PropsWithChildren<{
  title?: string;
}>;

const defaultTitle = 'Notice';

export const BaseLayout = (props: Props) => {
  return (
    <div>
      <Head>
        <title>{props.title || defaultTitle}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <div>
        {props.children}
      </div>
    </div>
  );
}