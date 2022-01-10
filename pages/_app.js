import "../styles/globals.css";
import Head from "next/head";
import getConfig from 'next/config';

const { publicRuntimeConfig } = getConfig()

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        {/* Basic Page Needs ================================================== */}
        <meta charSet="utf-8" />
        {/* Mobile Specific Metas ================================================== */}
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, user-scalable=0"
        />
      </Head>
      {/* <Component {...pageProps} base={`https://cdn.fkuwks.com/`} /> */}
      <Component {...pageProps} base={publicRuntimeConfig.base} />
    </>
  );
}

export default MyApp;
