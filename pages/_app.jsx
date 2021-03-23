/* eslint-disable react/prop-types */
import React from 'react';
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';

import '../styles/index.scss';
import CartContext, { useCart } from '../globalState';

config.autoAddCss = false;

function MyApp({ Component, pageProps }) {
  const [cartState, dispatch] = useCart();
  return (
    <CartContext.Provider value={{ cart: cartState, dispatch }}>
      <Component {...pageProps} />
    </CartContext.Provider>
  );
}

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// MyApp.getInitialProps = async (appContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);
//
//   return { ...appProps }
// }

export default MyApp;
