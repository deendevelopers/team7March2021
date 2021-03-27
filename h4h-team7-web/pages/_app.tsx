import "../styles/globals.css";
import "tailwindcss/tailwind.css";
import React from 'react';
import { StoreContextWrapper } from '../store/store-context';

function MyApp({ Component, pageProps }) {
  return (
    <StoreContextWrapper>
      <Component {...pageProps} />
    </StoreContextWrapper>
  );
}

export default MyApp;
